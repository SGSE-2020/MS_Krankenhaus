const path = require('path')
const Mali = require('mali')
var express = require('express');
var graphqlHTTP = require('express-graphql');
const restify = require('restify');
var { buildSchema } = require('graphql');

function addPatient (ctx) {
    ctx.res = { success: true }
  }
  

const PROTO_PATH = path.resolve(__dirname, './proto/patient.proto')
const gRPCApp = new Mali(PROTO_PATH, 'Hospital')
gRPCApp.use({ addPatient })
gRPCApp.start('127.0.0.1:50051')

var app = express();

app.get('/patients', function (req, res) {
  response = 
    [{id: "testID1"}, {id: "testID2"}]
  ;
  console.log(response);
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.json(response);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})