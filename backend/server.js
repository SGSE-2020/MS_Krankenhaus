const path = require('path')
const Mali = require('mali')
const testData = require('./testData')
var express = require('express');

let db = require('./database');

const shouldDropTables = true;

db.sequelize.sync({force: shouldDropTables}).then(function(){
    console.log('DB connection successful.');
    // Create a new patients
    for(patient in testData.testPatients) {
      db.patient.create({ name: testData.testPatients[patient].id, station: testData.testPatients[patient].station,
         faculty: testData.testPatients[patient].faculty, symtomps: testData.testPatients[patient].symtomps, diagnosis: testData.testPatients[patient].diagnosis,
         medication: testData.testPatients[patient].medication}).then(patient => {
        console.log("New Patient created", patient.userid);
      });
    }
    for(staff in testData.testStaff) {
      db.staff.create({ userid: testData.testStaff[staff].id, station: testData.testStaff[staff].station,
        faculty: testData.testStaff[staff].faculty, titel: testData.testStaff[staff].titel}).then(staff => {
        console.log("New staff created", staff.userid);
      });
    }
    for(appointment in testData.testAppointments) {
      db.appointment.create({ patientid: testData.testAppointments[appointment].patientId, station: testData.testAppointments[appointment].station,
        faculty: testData.testAppointments[appointment].faculty, time: testData.testAppointments[appointment].time}).then(appointment => {
        console.log("New appointment created", appointment.patientId);
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
  db.patient.findAll().then(patients => {
    console.log("All patients:", JSON.stringify(patients));
    response = JSON.stringify(patients);
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.json(response);
})

app.post('/patients', function (req, res) {
  db.patient.create({ name: req.query.name, station: req.query.station,
    faculty: req.query.faculty, symtomps: req.query.symtomps, diagnosis: req.query.diagnosis,
    medication: req.query.medication}).then(patient => {
   console.log("New Patient created", patient.userid);
 });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.json({created: true});
})

app.put('/patients', function (req, res) {
  db.patient.update({ name: req.query.name, station: req.query.station,
    faculty: req.query.faculty, symtomps: req.query.symtomps, diagnosis: req.query.diagnosis,
    medication: req.query.medication}, {
    where: {
      userid: req.query.id
    }
  }).then(() => {
    console.log("Done");
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.json({updated: true});
})

app.delete('/patients', function (req, res) {
  User.destroy({
    where: {
      userid: req.query.id
    }
  }).then(() => {
    console.log("Deleted");
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.json({deleted: true});
})

app.get('/staff', function (req, res) {
  db.staff.findAll().then(staff => {
    console.log("All staff members:", JSON.stringify(staff));
    response = JSON.stringify(staff);
  });
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
  db.appointment.findAll().then(appointment => {
    console.log("All appointment:", JSON.stringify(appointment));
    response = JSON.stringify(appointment);
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.json(response);
})

app.post('/appointments', function (req, res) {
  db.appointment.create({ patientid:  req.query.patientId, station:  req.query.station,
    faculty:  req.query.faculty, time: req.query.time}).then(appointment => {
    console.log("New appointment created", appointment.patientid);
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.json({created: true});
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