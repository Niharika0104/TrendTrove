const  express  = require('express')
const {getAllProducts,getProductsByIds,saveProduct} = require('../controllers/product')


const router = express.Router();

router.get('/products', getProductsByIds);

router.get('/products/all', getAllProducts);

router.post('/saveproducts', saveProduct);  

module.exports = router;
