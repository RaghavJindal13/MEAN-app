var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path'); 

var app = express();

const port = 3000;

//testing s
app.get('/',(req,res)=>{
    res.send('Hello i dont know')
});
app.listen(port,()=>{
    console.log('Server is started at port : '+port);
});