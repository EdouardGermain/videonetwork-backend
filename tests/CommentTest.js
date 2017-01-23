var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8085");

var comment = "first!";
var authName = "nicolas";
var authPass = "motdepasse";
var authId;
var authCookie;

server
    .post('/login')
    .send({"username": authName, "password": authPass})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
    authId = res.body._id;
    authCookie = res.request.cookies;
});

//set the user list length
var listCommLength;
server
    .get("/comment")
    .expect("Content-type",/json/)
    .end(function(err, res){
    listCommLength = res.body.length;
});

// UNIT test begin
describe("SAMPLE unit test for comment",function(){

    it("should return list of comment length",function(done){
        server
            .get("/comment")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listCommLength);
            done();
        });
    });

 /*   it("should add a comment",function(done){
        // Set cookie to get saved user session
        server.cookies = authCookie;
        server
            .post('/comment')
            .send({"text": comment, "author": authId})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            res.status.should.equal(200);
            res.body.username.should.equal(otherName);
            done();
        });

    });
/*
    it("should return list with the new comment",function(done){
        server
            .get("/user")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listCommLength + 1);
            done();
        });
    });

    it("should delete the new comment",function(done){
        // Set cookie to get saved user session
        server.cookies = authCookie;
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

    it("should return list with one comment less",function(done){
        server
            .get("/user")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listCommLength);
            done();
        });
    });*/
});