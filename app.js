const express = require('express');
const app = express(); 
var router = require('./routes/routes');
app.use("",router); 

app.listen(3000, ()=> console.log("server started ")); 