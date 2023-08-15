const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
  app.get('/api/products', ProductController.getAllProducts);
  app.get('/api/product/:id', ProductController.getOneProduct);
  app.post('/api/add/product', ProductController.createProduct);
  app.put('/api/update/product/:id', ProductController.updateProduct);
  app.delete('/api/delete/product/:id', ProductController.deleteProduct);
}

