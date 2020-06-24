const path = require('path')
const Mali = require('mali')
const testData = require('./testData')
var express = require('express');

let db = require('./database');

const shouldDropTables = true;
console.log("test")
for(patient in testData.testPatients) {
  console.log(testData.testPatients[patient].id, testData.testPatients[patient].station,
testData.testPatients[patient].faculty, testData.testPatients[patient].symtomps,testData.testPatients[patient].diagnosis,
testData.testPatients[patient].medication)
}

db.sequelize.sync({force: shouldDropTables}).then(function(){
    console.log('DB connection successful.');
    // Create a new patients
    for(patient in testData.testPatients) {
      db.patient.create({ userid: testData.testPatients[patient].id, station: testData.testPatients[patient].station,
         faculty: testData.testPatients[patient].faculty, symtomps: testData.testPatients[patient].symtomps, diagnosis: testData.testPatients[patient].diagnosis,
         medication: testData.testPatients[patient].medication}).then(patient => {
        console.log("New Patient created", patient.userid);
      });
    }
}, function(err){
    console.log('DB connection not successful.');
});

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
   
   console.log("Listening at http://%s:%s", host, port)
})

exports.closeServer = function(red, green, blue) {

  server.close();
  gRPCApp.close();

};