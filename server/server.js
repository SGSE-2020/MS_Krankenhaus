const path = require('path')
const Mali = require('mali')

function sayHello (ctx) {
    ctx.res = { message: 'Hello ' + ctx.req.name }
  }
  
function sayHi (ctx) {
    ctx.res = { message: 'Hi ' + ctx.req.name }
}

const PROTO_PATH = path.resolve(__dirname, './proto/helloworld.proto')
const app = new Mali(PROTO_PATH, 'Greeter')
app.use({ sayHello, sayHi })
app.start('127.0.0.1:50051')