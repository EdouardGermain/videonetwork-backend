module.exports = function(app,passport) {
    var annotationController = require('../controllers/AnnotationController.js');

};

/**
 * @api {get} /annotation Voir les annotations
 * @apiName getAllAnnotation
 * @apiGroup Annotation
 *
 * @apiPermission authentificated
 *
 *
 * @apiSuccess [annotations] annotations Retourne toutes les annotations
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
 *     HTTP/1.1 400 Not Found
 */

 /**
 * @api {get} /annotation/:id Voir une annotation
 * @apiName getAnnotation
 * @apiGroup Annotation
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id de l'annotation à récupérer.
 *
 * @apiSuccess [annotation] annotation Retourne l'annotation voulue.
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
 * @api {post} /annotation Création d'une annotation
 * @apiName createAnnotation
 * @apiGroup Annotation
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} texte message à envoyer.
 * @apiParam {Integer} idvideo
 *
 * @apiSuccess {Annotation} annotation Retourne l'annotation créée.
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
 * @api {delete} /annotation/:id Suppression d'une annotation
 * @apiName deleteAnnotation
 * @apiGroup Annotation
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id de l'annotation à supprimer.
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