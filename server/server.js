const path = require('path')
const Mali = require('mali')

function addPatient (ctx) {
    ctx.res = { success: true }
  }
  

const PROTO_PATH = path.resolve(__dirname, './proto/patient.proto')
const app = new Mali(PROTO_PATH, 'Greeter')
app.use({ addPatient })
app.start('127.0.0.1:50051')