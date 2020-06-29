const path = require('path')
const Mali = require('mali')
const testData = require('./testData')
var express = require('express');


const caller = require('grpc-caller')


const userProtoPath = path.resolve(__dirname, './proto/user.proto');
const grpcClient = caller('ms-buergerbuero:50051', userProtoPath, 'UserService');

let db = require('./database');

const shouldDropTables = true;

// db.sequelize.sync({force: shouldDropTables}).then(function(){
//     console.log('DB connection successful.');
//     // Create a new patients
//     for(patient in testData.testPatients) {
//       db.patient.create({ name: testData.testPatients[patient].id, station: testData.testPatients[patient].station,
//          faculty: testData.testPatients[patient].faculty, symtomps: testData.testPatients[patient].symtomps, diagnosis: testData.testPatients[patient].diagnosis,
//          medication: testData.testPatients[patient].medication}).then(patient => {
//         console.log("New Patient created", patient.userid);
//       });
//     }
//     for(staff in testData.testStaff) {
//       db.staff.create({ userid: testData.testStaff[staff].id, station: testData.testStaff[staff].station,
//         faculty: testData.testStaff[staff].faculty, titel: testData.testStaff[staff].titel}).then(staff => {
//         console.log("New staff created", staff.userid);
//       });
//     }
//     for(appointment in testData.testAppointments) {
//       db.appointment.create({ patientid: testData.testAppointments[appointment].patientId, station: testData.testAppointments[appointment].station,
//         faculty: testData.testAppointments[appointment].faculty, time: testData.testAppointments[appointment].time}).then(appointment => {
//         console.log("New appointment created", appointment.patientid);
//       });
//     }
    
// }, function(err){
//     console.log('DB connection not successful.');
// });

async function addPatient (ctx) {
  testData.testPatients.push({ userid: testData.testPatients.length+1, name: ctx.req.userid, station: ctx.req.station,
        faculty: ctx.req.faculty, symtomps: ctx.req.symtomps, diagnosis: ctx.req.diagnosis,
        medication: ctx.req.medication});
  testData.testPatients.push({ userid: testData.testPatients.length+1, name: ctx.req.Patient.userid, station: ctx.req.Patient.station,
    faculty: ctx.req.faculty, symtomps: ctx.req.symtomps, diagnosis: ctx.req.diagnosis,
    medication: ctx.req.medication});
  await grpcClient.getUser({
    uid: ctx.req.userid
  })
    .then(result => {
      testData.testPatients.push({ userid: testData.testPatients.length+1, name: result.firstName + " " + result.lastName, station: ctx.req.station,
        faculty: ctx.req.faculty, symtomps: ctx.req.symtomps, diagnosis: ctx.req.diagnosis,
        medication: ctx.req.medication})
      console.log(testData.testPatients)
      ctx.res = { success: true };
    })
    .catch(err => {
      testData.testPatients.push({ userid: testData.testPatients.length+1, name: err, station: "B-02",
      faculty:"Kardiologie", symtomps: "Herzrasen", diagnosis: JSON.stringify(err),
      medication: "-"})
      ctx.res = { success: false };
    })
  }


const PROTO_PATH = path.resolve(__dirname, './proto/patient.proto')
const gRPCApp = new Mali(PROTO_PATH, 'Hospital')
gRPCApp.use({ addPatient })
gRPCApp.start('0.0.0.0:50051')

var app = express();

function buildHeaderSuccess(res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); 
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Content-Type', 'application/json');
  res.status(200);
}

app.get('/patients', function (req, res) {
  buildHeaderSuccess(res);
  res.json(testData.testPatients);
  // db.patient.findAll().then(patients => {
  //   console.log("All patients:", JSON.stringify(patients));
  //   buildHeaderSuccess(res);
  //   res.json(patients);
  // });
})

app.post('/patients', function (req, res) {
  buildHeaderSuccess(res);
  testData.testPatients.push({ userid: testData.testPatients.length+1, name: req.query.name, station: req.query.station,
       faculty: req.query.faculty, symtomps: req.query.symtomps, diagnosis: req.query.diagnosis,
       medication: req.query.medication})
  res.json({created: true});
  // db.patient.create({ name: req.query.name, station: req.query.station,
  //   faculty: req.query.faculty, symtomps: req.query.symtomps, diagnosis: req.query.diagnosis,
  //   medication: req.query.medication}).then(patient => {
  //   console.log("New Patient created", patient.userid);
  //   buildHeaderSuccess(res);
  //   res.status(200);
  //   res.json({created: true});
  // });
})

app.post('/updatepatient', function (req, res) {
  buildHeaderSuccess(res);
  for(patient in testData.testPatients) {
    if(req.query.id == testData.testPatients[patient].userid) {
      testData.testPatients[patient] = { userid: req.query.id,name: req.query.name, station: req.query.station,
           faculty: req.query.faculty, symtomps: req.query.symtomps, diagnosis: req.query.diagnosis,
           medication: req.query.medication};
    }
  }
  res.json({updated: true});
  // db.patient.update({ name: req.query.name, station: req.query.station,
  //   faculty: req.query.faculty, symtomps: req.query.symtomps, diagnosis: req.query.diagnosis,
  //   medication: req.query.medication}, {
  //   where: {
  //     userid: req.query.id
  //   }
  // }).then(() => {
  //   console.log("Done");
  //   buildHeaderSuccess(res);
  //   res.status(200);
  //   res.json({updated: true});
  // });
})

app.post('/deletepatient', function (req, res) {
  buildHeaderSuccess(res);
  testData.testPatients.splice(req.query.id-1,1)
  for(patient in testData.testPatients) {
    if(req.query.id < testData.testPatients[patient].userid) {
      testData.testPatients[patient].userid = testData.testPatients[patient].userid -1
    }
  }
  console.log(testData.testPatients)
  res.json({deleted: true});
  // db.patient.destroy({
  //   where: {
  //     userid: req.query.id
  //   }
  // }).then(() => {
  //   console.log("Deleted");
  //   buildHeaderSuccess(res);
  //   res.json({deleted: true});
  // });
})

app.get('/staff', function (req, res) {
  buildHeaderSuccess(res);
  res.json(testData.testStaff);
  // db.staff.findAll().then(staff => {
  //   console.log("All staff members:", JSON.stringify(staff));
  //   buildHeaderSuccess(res);
  //   res.json(staff);
  // });

})

app.get('/bills', function (req, res) {
  response = testData.testBills;
  buildHeaderSuccess(res);
  res.json(response);
})

app.get('/appointments', function (req, res) {
  buildHeaderSuccess(res);
  res.json(testData.testAppointments);
  // db.appointment.findAll().then(appointment => {
  //   console.log("All appointment:", JSON.stringify(appointment));
  //   buildHeaderSuccess(res);
  //   res.json(appointment);
  // });

})

app.post('/appointments', function (req, res) {
  buildHeaderSuccess(res);
  testData.testAppointments.push({id: testData.testAppointments.length+1, patientid:  req.query.patientId, station:  req.query.station,
       faculty:  req.query.faculty, time: req.query.time});
  res.json({created: true});
  // db.appointment.create({ patientid:  req.query.patientId, station:  req.query.station,
  //   faculty:  req.query.faculty, time: req.query.time}).then(appointment => {
  //   console.log("New appointment created", appointment.patientid);
  //   buildHeaderSuccess(res);
  //   res.json({created: true});
  // });
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