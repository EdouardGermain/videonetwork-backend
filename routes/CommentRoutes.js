module.exports = function(app,passport) {
    var commentController = require('../controllers/CommentController.js');

};

/**
 * @api {get} /comment Voir les commentaires
 * @apiName getAllComment
 * @apiGroup Comment
 *
 * @apiPermission authentificated
 *
 *
 * @apiSuccess [comments] comments Retourne toutes les comments
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
 * @api {get} /comment/:id Voir un commentaire
 * @apiName getComment
 * @apiGroup Comment
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id de l'comment à récupérer.
 *
 * @apiSuccess [comment] comment Retourne l'comment voulue.
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
 * @api {post} /comment Création d'un commentaire
 * @apiName createComment
 * @apiGroup Comment
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} texte message à envoyer.
 * @apiParam {Integer} idvideo
 *
 * @apiSuccess {Comment} comment Retourne le commentaire créé.
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
 * @api {delete} /comment/:id Suppression d'un comment
 * @apiName deleteComment
 * @apiGroup Comment
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id de l'comment à supprimer.
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