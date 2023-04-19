# Module 2 - Create a Cryprocurrency

# Import libraries
# from crypt import methods
import datetime
import hashlib
import json
from urllib import response
from flask import Flask, jsonify, request
import requests
from uuid import uuid4
from urllib.parse import urlparse 

# Part I - Building a Blockchain
class Blockchain:

  def __init__(self):
    self.chain = []
    # list of transactions in the wait list
    self.transactions = []
    self.createBlock(proof = 1, previousHash = '0')
    self.nodes = set()

  def createBlock(self, proof, previousHash):
    block = {
      'index': len(self.chain) + 1,
      'timestamp': str(datetime.datetime.now()),
      'proof': proof,
      'previousHash': previousHash,
      'transactions': self.transactions
    }
    # update transactions list
    self.transactions = []
    self.chain.append(block)
    return block

  def getPreviousBlock(self):
    return self.chain[-1]

  def proofOfWork(self, previousProof):
    newProof = 1
    checkProof = False
    while checkProof is False:
      hashOperation = hashlib.sha256(str(newProof**2 - previousProof**2).encode()).hexdigest()
      if hashOperation[:4] == "0000":
        checkProof = True
      else:
        newProof += 1
    return newProof
  
  def hash(self, block):
    encodedBlock = json.dumps(block, sort_keys = True).encode()
    return hashlib.sha256(encodedBlock).hexdigest()
  
  # check hash of revious block is valid 
  # check if is valid fallowing the proofofwork
  def isChainValid(self, chain):
    previousBlock = chain[0]
    blockIndex = 1
    while blockIndex < len(chain):
      block = chain[blockIndex]
      if block['previousHash'] != self.hash(previousBlock):
        return False
      previousProof = previousBlock['proof']
      proof = block['proof']
      hashOperation = hashlib.sha256(str(proof**2 - previousProof**2).encode()).hexdigest()
      if hashOperation[:4] != "0000":
        return False
      previousBlock = block
      blockIndex += 1
    return True

  def addTransaction(self, sender, receiver, amount):
    self.transactions.append({
      'sender': sender,
      'receiver': receiver,
      'amount': amount,
    })
    previousBlock = self.getPreviousBlock()
    return previousBlock['index'] + 1
   
  def addNode(self, address):
    parsedUrl = urlparse(address)
    self.nodes.add(parsedUrl.netloc)

  def replaceChain(self):
    network = self.nodes
    longest_chain = None
    max_length = len(self.chain)
    for node in network:
      print(node)
      response = requests.get(f'http://{node}/get_chain')
      print(response.json())
      if response.status_code == 200:
        length = int(response.json()[0]['length'])
        chain = response.json()[0]['chain']
        if length > max_length and self.isChainValid(chain):
          max_length = length
          longest_chain = chain
    if longest_chain:
      self.chain = longest_chain
      return True
    return False


# -----

# Part II - Mining  a blockchain
# Creating a Web App
app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

# Creating an address for the node on Port 5000
nodeAddress = str(uuid4()).replace('-', '')

# Createing a Blockchain
blockchain = Blockchain()

# Mining a new block
@app.route('/mine_block', methods=['GET'])
def mineBlock():
  previousBlock = blockchain.getPreviousBlock()
  # previousBlockTrim = copy(previousBlock)
  previousProof = previousBlock['proof']
  # previousBlockTrim.pop('hash')
  
  previousHash = blockchain.hash(previousBlock)
  proof = blockchain.proofOfWork(previousProof)
  blockchain.addTransaction(sender=nodeAddress, receiver='Me', amount=1)
  block = blockchain.createBlock(proof, previousHash)
  response = {
    'message': 'Block mined!',
    'index': block['index'],
    'timestamp': block['timestamp'],
    'proof': block['proof'],
    'previousHash': block['previousHash'],
    'transactions': block['transactions']
    # 'hash': block['hash']
  }
  return jsonify(response, 200)

# Get all blockchain
@app.route('/get_chain', methods=['GET'])
def getChain():
  response = {
    'length': len(blockchain.chain),
    'chain': blockchain.chain,
  }
  return jsonify(response, 200)

""" @app.route('/is_valid', methods=['GET'])
def isValid():
  response = {
    'status': blockchain.isChainValid(blockchain.chain)
  }
  return jsonify(response, 200) """

@app.route('/replaceChain', methods=['GET'])
def replaceChain():
  isChainReplaced = blockchain.replaceChain()
  if isChainReplaced:
    response = {
      'message': 'The nodes had different chains so the chain was replaced by the longest one!',
      'newChain': blockchain.chain
    }
  else:
    response = {
      'message': 'All good. The chain is the largest one.',
      'actualChain': blockchain.chain
    }
    
  return jsonify(response, 200)

# Part III - Decentralizing our Blockchain
@app.route('/add_transaction', methods=['POST'])
def add_transaction():
  json = request.get_json()
  transactionKeys = ['sender', 'receiver', 'amount']
  if not all (key in json for key in transactionKeys):
    return jsonify({
      'message': 'Some elements of the transaction are missing'
    }, 400)
  index = blockchain.addTransaction(json['sender'], json['receiver'], json['amount'])
  return jsonify({
    'message': f'This transaction will be added to block {index}'
  }, 201)
  
# Connecting new nodes
@app.route('/connect_node', methods=['POST'])
def connectNode():
  json = request.get_json()
  nodes = json.get('nodes')
  if nodes is None:
    return jsonify({
      'message': 'No nodes'
    }, 400)
  for node in nodes:
    blockchain.addNode(node)
  return jsonify({
    'message': 'All the nodes are now connected!',
    'totalNodes' : list(blockchain.nodes)
  }, 201)


# Running app
app.run(host = '0.0.0.0', port = 5000)


# print("Hello")
# a = Blockchain()
# Blockchain.createBlock(a, 2,"A")
# Blockchain.createBlock(a, 2,"B")

