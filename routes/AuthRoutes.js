
module.exports = function(app,passport) {
    var authController = require('../controllers/AuthController')(passport);

    /**
     * @api {post} /login Connexion
     * @apiName login
     * @apiGroup User
     *
     *
     * @apiParam {String} texte message à envoyer.
     * @apiParam {Integer} idvideo
     *
     * @apiSuccess {User} user Retourne le user créée.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 201 OK
     {
       "texte": "Message",
       "idReceiver": 1,
       "idSender": 12,
       "createdAt": "2016-11-20T16:20:37.165Z",
       "updatedAt": "2016-11-20T16:20:37.165Z",
       "id": 13
       }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     */
    app.post('/login', authController.login);

    /**
     * @api {get} /user/me Voir l'utilisateur connecté
     * @apiName getCurrentUser
     * @apiGroup User
     *
     * @apiPermission authentificated
     *
     *
     * @apiSuccess users users Retourne toutes les users
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     {
       "messages": [],
       "idUser1": 13,
       "idUser2": 12,
       "createdAt": "2016-08-19T11:13:21.742Z",
       "updatedAt": "2016-08-19T11:13:21.742Z",
       "id": 1
     }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     */

    app.get('/user/me', authController.isAuthenticated, authController.getCurrentUser);

    /**
     * @api {get} /logout Se déconnecter
     * @apiName Logout
     * @apiGroup User
     *
     * @apiPermission authentificated
     *
     *
     * @apiSuccess users users Retourne toutes les users
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     {
       "messages": [],
       "idUser1": 13,
       "idUser2": 12,
       "createdAt": "2016-08-19T11:13:21.742Z",
       "updatedAt": "2016-08-19T11:13:21.742Z",
       "id": 1
     }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     */
    app.get('/logout', authController.logout);

};



