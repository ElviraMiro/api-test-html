const express = require("express");
//var crypto = require('crypto');
const bodyParser = require('body-parser');
const getJWT = require("./get_jwt");
var jwtoken = "";

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.get("/", function(req, res){
    getJWT().then(response=>{
        jwtoken = response.data;
        console.log("TOKEN:", jwtoken)
        res.send(jwtoken)
    }).catch(err=>{res.sendStatus(405)})
});

app.listen(3001);