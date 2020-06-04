var expect  = require("chai").expect;
var request = require("request");


describe("MS_Krankenhaus API", function() {

    describe("Routes", function() {
  
      var url = "http://localhost:8080/patients";
  
      it("returns status 200", function() {
        request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
        });
      });
  
    });
  
  });