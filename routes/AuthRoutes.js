/**
 * Author : Edouard Germain
 */
module.exports = function(app,passport) {
    var authController = require('../controllers/AuthController')(passport);

    /**
     * @api {post} /login login
     * @apiName login
     * @apiGroup User
     *
     *
     * @apiParam {String} username Nom d'utilisateur.
     * @apiParam {String} password Mot de passe.
     *
     * @apiParamExample {json} Request-Example:
     {
         "username": "pseudo",
         "password": "password"
     }
     * @apiSuccess {String} _id The user's id.
     * @apiSuccess {datetime} updatedAt The users firstname.
     * @apiSuccess {datetime} createdAt The users firstname.
     * @apiSuccess {String} email The user's email.
     * @apiSuccess {String} username The user's username.
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
          "__v": 0
     }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *
     */
    app.post('/login', authController.login);

    /**
     * @api {get} /user/me getCurrentUser
     * @apiName getCurrentUser
     * @apiGroup User
     *
     * @apiPermission authentificated
     *
     * @apiSuccess {String} _id The user's id.
     * @apiSuccess {datetime} updatedAt The users firstname.
     * @apiSuccess {datetime} createdAt The users firstname.
     * @apiSuccess {String} email The user's email.
     * @apiSuccess {String} username The user's username.
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
          "__v": 0
     }
     *
     *
     * @apiErrorExample Error-Response:
     * HTTP/1.1 403 Forbidden
     *  {
     *      "message":"Permission denied"
     *  }
     */

    app.get('/user/me', authController.isAuthenticated, authController.getCurrentUser);

    /**
     * @api {get} /logout logout
     * @apiName Logout
     * @apiGroup User
     *
     * @apiPermission authentificated
     *
     * @apiSuccess message logout
     *
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
            {
               "message": "logout"
            }
     *
     * @apiErrorExample Error-Response:
     * HTTP/1.1 403 Forbidden
     *  {
     *      "message":"Permission denied"
     *  }
     */

    app.get('/logout', authController.logout);

};



