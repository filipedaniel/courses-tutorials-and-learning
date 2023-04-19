# Module 1 - Create a Blockchain

# Import libraries
from crypt import methods
import datetime
import hashlib
import json
from urllib import response
from flask import Flask, jsonify
from copy import copy

# Part I - Building a Blockchain
class Blockchain:

  def __init__(self):
    self.chain = []
    self.createBlock(proof = 1, previousHash = '0')

  def createBlock(self, proof, previousHash):
    block = {
      'index': len(self.chain) + 1,
      'timestamp': str(datetime.datetime.now()),
      'proof': proof,
      'previousHash': previousHash
    }
    # blockHash = self.hash(block)
    # block['hash'] = blockHash
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



# Part II - Mining  a blockchain


# Creating a Web App
app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

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
  
  block = blockchain.createBlock(proof, previousHash)
  response = {
    'message': 'Block mined!',
    'index': block['index'],
    'timestamp': block['timestamp'],
    'proof': block['proof'],
    'previousHash': block['previousHash'],
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

@app.route('/is_valid', methods=['GET'])
def isValid():
  response = {
    'status': blockchain.isChainValid(blockchain.chain)
  }
  return jsonify(response, 200)


# Running app
app.run(host = '0.0.0.0', port = 5000)


# print("Hello")
# a = Blockchain()
# Blockchain.createBlock(a, 2,"A")
# Blockchain.createBlock(a, 2,"B")

