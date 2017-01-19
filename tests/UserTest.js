var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8085");

// UNIT test begin

describe("SAMPLE unit test for videos",function(){

    var listUserLength = 1;
    var otherName = "other";
    var otherPass = "otherpass";

    it("should return list with one user",function(done){
        server
            .get("/user")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listUserLength);
            done();
        });
    });

    it("should add a user",function(done){
        server
            .post('/user')
            .send({"username": otherName, "email": "other@test.com", "password": otherPass})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            res.status.should.equal(200);
            res.body.username.should.equal(otherName);
            done();
        });

    });

    it("should return list with two user",function(done){
        server
            .get("/user")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listUserLength + 1);
            done();
        });
    });

    var otherId;
    var otherCookie;

    it("should login the new user",function(done){
        server
            .post('/login')
            .send({"username": otherName, "password": otherPass})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            res.status.should.equal(200);
            res.body.username.should.equal(otherName);
            otherId = res.body._id;
            otherCookie = res.request.cookies;

            /*it("should delete a user",function(done){
                server.delete("/user/" + otherId)
                    .expect("Content-type",/json/)
                    .expect(200)
                    .end(function(err,res){
                    //res.status.should.equal(200);
                    //res.body.error.should.equal(false);
                    //res.body.data.should.equal(30);
                    done();
                });
            });*/

            done();
        });
    });

    it("should delete a user",function(done){
        // Set cookie to get saved user session
        server.cookies = otherCookie;
        server.delete("/user/" + otherId)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            //res.status.should.equal(200);
            //res.body.error.should.equal(false);
            //res.body.data.should.equal(30);
            done();
        });
    });

    it("should return list with one user",function(done){
        server
            .get("/user")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listUserLength);
            done();
        });
    });
});