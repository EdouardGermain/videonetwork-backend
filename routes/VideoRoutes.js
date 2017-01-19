module.exports = function(app,passport) {
    var videoController = require('../controllers/VideoController.js');
    require('./base/index')(app,passport,"video");
};

/**
 * @api {get} /video Voir les videos
 * @apiName getAllVideo
 * @apiGroup Video
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du match à récupérer.
 *
 * @apiSuccess [videos] videos Retourne toutes les videos
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
 *
 */

 /**
 * @api {get} /video/:id Voir un video
 * @apiName getVideo
 * @apiGroup Video
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du video à récupérer.
 *
 * @apiSuccess [video] video Retourne le video voulu.
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
 * @api {post} /video Création d'un video
 * @apiName createVideo
 * @apiGroup Video
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} texte message à envoyer.
 * @apiParam {Integer} idvideo
 *
 * @apiSuccess {Video} video Retourne le video créée.
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
 * @api {delete} /video/:id Suppression d'un video
 * @apiName deleteVideo
 * @apiGroup Video
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du video à supprimer.
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