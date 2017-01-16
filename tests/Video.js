var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8085");

// UNIT test begin

describe("SAMPLE unit test for videos",function(){

    // #1 should return home page
    it("should fail to return home page",function(done){

        // calling home page api
        server
            .get("/")
            .expect("Content-type",/json/)
            .expect(404) // THis is HTTP response
            .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(404);
            // Error key should be false.
            //res.body.error.should.equal(false);
            done();
        });
    });
    
    it("should return video list",function(done){

        // calling home page api
        server
            .get("/video")
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            // Error key should be false.
            //res.body.error.should.equal(false);
            // Res.text should be empty
            res.text.should.equal("[]");
            done();
        });
    });

});