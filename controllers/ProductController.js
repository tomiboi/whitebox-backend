const fetch = require('node-fetch')

const getProducts = async (req, res) => {

    let response = await fetch('https://next.json-generator.com/api/json/get/EkzBIUWNL'); 
    const products = await response.json();
    let message = "Product not found"; 
    let status = 400; 
    

    if(products){
        status = response.status; 
        message = "Product found"; 
    }

    res.status(status).json({
        status: status,
        message: message, 
        data: products
    }); 

};


const getProduct = async (req, res) => {

    let response = await fetch('https://next.json-generator.com/api/json/get/EkzBIUWNL'); 
    const products = await response.json();
    let product = products.find(p => p._id === req.params.id); 
    let message = "Product not found"; 
    let status = 400; 

    if(product){
        status = response.status; 
        message = "Product found"; 
    }
    res.status(status).json({
        status: status,
        data: product, 
        message: message
    }); 
};


module.exports = { getProducts, getProduct};
