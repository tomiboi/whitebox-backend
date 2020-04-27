const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const cors = require('cors')

router.use(cors())

router.get("/",ProductController.getProducts);  
router.get("/:id",ProductController.getProduct);  


module.exports = router;
