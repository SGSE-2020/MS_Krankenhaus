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

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Patient {
    id: String
  }
  type Query {
    allPatients: [Patient]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  allPatients: () => {
    return [{id: "testID1"}, {id: "testID2"}];
  },
};

var graphQLApp = restify.createServer();

graphQLApp.get(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

graphQLApp.post(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

graphQLApp.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');