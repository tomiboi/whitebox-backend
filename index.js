const express = require('express');
const app = express(); 
const fetch = require('node-fetch')
var cors = require('cors')
app.use(cors())

app.get("/", (req,res) => {

    res.header('Access-Control-Allow-Origin', "*");

    fetch('https://next.json-generator.com/api/json/get/EkzBIUWNL')
    .then((res) => { 
      status = res.status; 
      return res.json() 
    })
    .then((jsonData) => {

      res.status(status).json({
        status: status,
        data: jsonData
    });



    })
    .catch((err) => {
      // handle error for example
      console.error(err);
    });


}); 


app.get("/:id", (req,res) => {

  res.header('Access-Control-Allow-Origin', "*");

  fetch('https://next.json-generator.com/api/json/get/EkzBIUWNL')
  .then((res) => { 
    status = res.status; 
    return res.json() 
  })
  .then((jsonData) => {

    let product = jsonData.find(p => p._id === req.params.id); 
    
    res.status(status).json({
      status: status,
      data: product
  });



  })
  .catch((err) => {
    // handle error for example
    console.error(err);
  });


}); 


app.listen(3000, ()=> console.log("boiboi")); 