var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8085");

// UNIT test begin

describe("SAMPLE unit test for server",function(){

    // #1 should return home page
    it("should contact server",function(done){
        server
            .get("/")
            .expect("Content-type",/json/)
            .expect(404) // This is HTTP response
            .end(function(err, res){
            // HTTP status should be 404
            res.status.should.equal(404);
            done();
        });
    });
    
    it("should add a login",function(done){
        var username = "nicolas";
        server
            .post('/login')
            .send({"username": username, "password": "motdepasse"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            res.status.should.equal(200);
            res.body.username.should.equal(username);
            console.log(res.request.cookies);
            done();
        });
    });

});