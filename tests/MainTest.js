/**
 * Author : Nicolas Forget
 */

var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8085");
var deleteMessage = "removed";

var otherName = "other";
var otherPass = "otherpass";
var otherId;
var otherCookie;

var commentText = "first!";
var commentId;

//set the all the list length
var listUserLength;
server
    .get("/user")
    .expect("Content-type",/json/)
    .end(function(err, res){
    listUserLength = res.body.length;
});

var listCommLength;
server
    .get("/comment")
    .expect("Content-type",/json/)
    .end(function(err, res){
    listCommLength = res.body.length;
});

// UNIT test begin
describe("SAMPLE unit test for server",function(){

    /*
     * server test
     */

    it("should contact server and handle 404",function(done){
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
            done();
        });
    });

    /*
     * User test part1
     */

    it("should return list user length",function(done){
        console.log("********************");
        console.log("*** USER TEST ***");
        console.log("********************");
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

    it("should return list with the new user",function(done){
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
            done();
        });
    });

    /*
     * Comment test
     */

    it("should return list of comment length",function(done){
        console.log("********************");
        console.log("*** COMMENT TEST ***");
        console.log("********************");
        server
            .get("/comment")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listCommLength);
            done();
        });
    });

    it("should add a new comment from the new user",function(done){
        // Set cookie to get saved user session
        server.cookies = otherCookie;
        server
            .post("/comment")
            .send({"text": commentText, "author": otherId})
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(201);
            res.body.text.should.equal(commentText);
            res.body.author._id.should.equal(otherId);
            commentId = res.body._id
            done();
        });
    });

    it("should return comment list length with one more",function(done){
        server
            .get("/comment")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listCommLength + 1);
            done();
        });
    });
    
    it("should get the new comment by id",function(done){
        // Set cookie to get saved user session
        server.cookies = otherCookie;
        server
            .get("/comment/" + commentId)
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.text.should.equal(commentText);
            res.body.author.should.equal(otherId);
            done();
        });
    });
    
    it("should update the new comment with new text",function(done){
        // Set cookie to get saved user session
        server.cookies = otherCookie;
        server
            .put("/comment/" + commentId)
            .send({"text": "new comment text"})
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.text.should.equal("new comment text");
            done();
        });
    });
    
    it("should delete the new comment",function(done){
        // Set cookie to get saved user session
        server.cookies = otherCookie;
        server
            .delete("/comment/" + commentId)
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.message.should.equal(deleteMessage);
            done();
        });
    });
    
    it("should return comment list length with one less",function(done){
        server
            .get("/comment")
            .expect("Content-type",/json/)
            .end(function(err, res){
            res.status.should.equal(200);
            res.body.length.should.equal(listCommLength);
            done();
        });
    });

    /*
     * User test part2
     */

    it("should delete a user",function(done){
        console.log("********************");
        console.log("*** USER TEST (2) ***");
        console.log("********************");
        // Set cookie to get saved user session
        server.cookies = otherCookie;
        server.delete("/user/" + otherId)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            res.status.should.equal(200);
            res.body.message.should.equal(deleteMessage);
            done();
        });
    });

    it("should return list with one user less",function(done){
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