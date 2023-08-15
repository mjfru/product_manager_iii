const Product = require('../models/product.model')

module.exports = { 
  createProduct: (req, res) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err));
  },

  getAllProducts: (req, res) => {
    Product.find({})
      .then((allProducts) => {
        res.json(allProducts)
      })
      .catch((err) => {
        res.json(err)
      })
  },

  getOneProduct: (req, res) => {
    Product.findOne( {_id: req.params.id} )
      .then(product => res.json(product))
      .catch(err => res.json(err));
  },
  
  updateProduct: (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
      {_id: id},
      req.body,
      {new:true, runValidators:true}
    )
      .then((updatedProduct) => {
        res.json(updatedProduct)
      })
      .catch(err => {
        res.json(err)
      })
  },

  deleteProduct: (req, res) => {
    const id = req.params.id
    Product.deleteOne({_id: id})
      .then(res => {
        res.json(res)
      })
      .catch(err => {
        res.json(err)
      })
  }

}