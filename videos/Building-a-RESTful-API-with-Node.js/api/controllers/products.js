const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/products');

exports.products_get_all = (req, res, next) => {
  Product
    .find()
    .select('name price _id')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            request: {
              type: 'GET',
              url: '/products/' + doc._id
            }
          }
        })
      };
      
      res.status(200).jsonp(response)
    })
    .catch(err => {
      console.log(err);
      res.status(500).jsonp({
        error: err
      })
    });
  
}

exports.products_post_product = (req, res, next) => {

  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Created product successfully!',
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: 'GET',
            urk: '/products/' + result._id
          }
        }
      });
    })
    .catch(err => { 
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
}

exports.products_get_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('name price _id')
    .exec()
    .then(doc => {
      const response = {
        name: doc.name,
        price: doc.price,
        _id: doc._id
      }
      res.status(200).json(response)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err})
    });

}

exports.products_patch_product = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update(
    { _id : id },
    { $set : updateOps }
  )
  .exec()
  .then(result => {
    res.status(200).jsonp({ 
      message: 'Product Updated!',
      request: {
        type: 'GET',
        urk: '/products/' + id
      }
     });
  })
  .catch(err => {
    console.log(err);
    res.status(500).jsonp({
      error: err
    })
  });
}

exports.products_delete_product = (req, res, next) => {
  const id = req.params.productId;
  Product
    .remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).jsonp({ 
        message: 'Product Deleted!',
        request: {
          type: 'GET',
          description: 'See all products!', 
          url: '/products', 
        }
       })
    })
    .catch(err => {
      res.status(500).jsonp({
        error: err
      });
    });
}


