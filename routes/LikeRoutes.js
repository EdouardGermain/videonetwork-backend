module.exports = function(app) {
    var LikeDAO = require('../dao/LikeDAO.js');

};

/**
 * @api {get} /like Voir les likes
 * @apiName getAllLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiSuccess [likes] likes Retourne toutes les likes
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
 * @api {get} /like/:id Voir un like
 * @apiName getLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du like à récupérer.
 *
 * @apiSuccess [like] like Retourne le like voulu.
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
 * @api {post} /like Création d'un like
 * @apiName createLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} texte message à envoyer.
 * @apiParam {Integer} idvideo
 *
 * @apiSuccess {Like} like Retourne le like créée.
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
 * @api {delete} /like/:id Suppression d'un like
 * @apiName deleteLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du like à supprimer.
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