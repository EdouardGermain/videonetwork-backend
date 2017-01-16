
module.exports = function(app,passport) {
    var userController = require('../controllers/UserController.js');

    /**
    * @api {get} /user/name/:name Voir un user
    * @apiName getUserByName
    * @apiGroup User
    *
    * @apiPermission authentificated
    *
    * @apiParam {String} name Nom du user à récupérer.
    *
    * @apiSuccess [user] user Retourne le user voulu.
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
    app.get('/user/name/:name', userController.findByName);

};

/**
 * @api {get} /user Voir les users
 * @apiName getAllUser
 * @apiGroup User
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du match à récupérer.
 *
 * @apiSuccess [users] users Retourne toutes les users
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

 /**
 * @api {get} /user/:id Voir un user
 * @apiName getUser
 * @apiGroup User
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du user à récupérer.
 *
 * @apiSuccess [user] user Retourne le user voulu.
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

/**
 * @api {post} /user Création d'un user
 * @apiName createUser
 * @apiGroup User
 *
 * @apiPermission authentificated
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

/**
 * @api {delete} /user/:id Suppression d'un user
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
 *     HTTP/1.1 200 OK
 {
    "message":"success"
 }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */