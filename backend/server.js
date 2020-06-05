const path = require('path')
const Mali = require('mali')
const testData = require('./testData')
var express = require('express');

function addPatient (ctx) {
    ctx.res = { success: true }
  }
  

const PROTO_PATH = path.resolve(__dirname, './proto/patient.proto')
const gRPCApp = new Mali(PROTO_PATH, 'Hospital')
gRPCApp.use({ addPatient })
gRPCApp.start('127.0.0.1:50051')

var app = express();

app.get('/patients', function (req, res) {
  response = testData.testPatients;
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.json(response);
})

app.get('/staff', function (req, res) {
  response = testData.testStaff;
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.json(response);
})

app.get('/bills', function (req, res) {
  response = testData.testBills;
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.json(response);
})

app.get('/appointments', function (req, res) {
  response = testData.testAppointments;
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.json(response);
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

exports.closeServer = function(red, green, blue) {

  server.close();
  gRPCApp.close();

};