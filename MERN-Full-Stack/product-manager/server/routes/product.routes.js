const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/people', ProductController.createProduct);
    app.get('/api/show',ProductController.findAllProduct);
    app.get('/api/product', ProductController.findAllProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.get('/api/product/:id', ProductController.getProduct);



}

