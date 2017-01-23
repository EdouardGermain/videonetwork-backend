

module.exports = function(app,passport) {
    var userController = require('../controllers/UserController.js');
    var authController = require('../controllers/AuthController.js')(passport);

    /**
    * @api {get} /user/name/:name getUserByName
    * @apiName getUserByName
    * @apiGroup User
    *
    *
    * @apiUse ReturnUser
    *
    * @apiErrorExample Error-Response:
    * HTTP/1.1 404 Not Found

    */
    app.get('/user/name/:name', userController.findByName);

    /**
     * @api {post} /user signUp
     * @apiName createUser
     * @apiGroup User
     *
     * @apiUse PostUser
     *
     * @apiUse ReturnUser
     *
     * @apiErrorExample Error-Response:
     * HTTP/1.1 400 Bad Request
     */

    app.post('/user', authController.signup);

    require('./base/index')(app,passport,"User");
};

/**
 * @api {get} /user getAllUser
 * @apiName getAllUser
 * @apiGroup User
 *
 *
 * @apiSuccess Array[users] Retourne tous les users
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
         [
             {
               "_id": "58809078b267b15839f011d1",
               "updatedAt": "2017-01-19T10:10:01.042Z",
               "createdAt": "2017-01-19T10:10:01.042Z",
               "email": "azerty@azerty.fr",
               "username": "azerty",
               "website" : "abcf.fr",
                "description" : "ma description",
                "youtube_chanel" : "videoTV",
                "country" : "France",
               "__v": 0
             },
             {
               "_id": "5880b5784a759870f0e45c12",
               "updatedAt": "2017-01-19T12:47:52.402Z",
               "createdAt": "2017-01-19T12:47:52.402Z",
               "email": "pseudo@mail.fr",
               "username": "pseudo",
               "website" : "abcf.fr",
                "description" : "ma description",
                "youtube_chanel" : "videoTV",
                "country" : "France",
               "__v": 0
             }
         ]
 *
 */

 /**
 * @api {get} /user/:id getUserById
 * @apiName getUser
 * @apiGroup User
 *
 * @apiParam {Integer} id id du user à récupérer.
 *
 * @apiUse ReturnUser
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 404 Not Found
 */

/**
 * @api {put} /user/:id updateUser
 * @apiName updateUser
 * @apiGroup User
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du user à modifier.
 * @apiUse PostUser
 *
 * @apiUse ReturnUser
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /user/:id deleteUser
 * @apiName deleteUser
 * @apiGroup User
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du user à supprimer.
 *
 * @apiSuccess {String} message Retourne un message.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
     {
        "message":"removed"
     }
 *
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 */

/**
 * @apiDefine ReturnUser
 * @apiSuccess {String} _id The user's id.
 * @apiSuccess {Datetime} updatedAt The users date updated.
 * @apiSuccess {Datetime} createdAt The users date created.
 * @apiSuccess {String} email The user's email.
 * @apiSuccess {String} username The user's username.
 * @apiSuccess {String} website The user's website.
 * @apiSuccess {String} description The user's description.
 * @apiSuccess {String} youtube_chanel The user's youtube_chanel.
 * @apiSuccess {String} country The user's country.
 * @apiSuccess {String} __v The user's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
       {
            "_id": "5880b5784a759870f0e45c12",
            "updatedAt": "2017-01-19T12:47:52.402Z",
            "createdAt": "2017-01-19T12:47:52.402Z",
            "email": "pseudo@mail.fr",
            "username": "pseudo",
            "website" : "abcf.fr",
            "description" : "ma description",
            "youtube_chanel" : "videoTV",
            "country" : "France",
            "__v": 0
        }
 */

/**
 * @apiDefine PostUser

 * @apiParam {String} email The user's email.
 * @apiParam {String} username The user's username.
 * @apiParam {String} password The user's password.
 * @apiParam {String} [website] The user's website.
 * @apiParam {String} [description] The user's description.
 * @apiParam {String} [youtube_chanel] The user's youtube_chanel.
 * @apiParam {String} [country] The user's country.
 *
 * @apiParamExample {json} Request-Example:
        {
            "email": "pseudo@mail.fr",
            "password": "password",
            "username": "pseudo",
            "website" : "abcf.fr",
            "description" : "ma description",
            "youtube_chanel" : "videoTV",
            "country" : "France"
        }
 */