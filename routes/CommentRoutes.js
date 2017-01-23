module.exports = function(app,passport) {
    var commentController = require('../controllers/CommentController.js');
    require('./base/index')(app,passport,"Comment");
};

/**
 * @api {get} /comment getAllComment
 * @apiName getAllComment
 * @apiGroup Comment
 *
 * @apiSuccess [comments] comments Retourne toutes les comments
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
     {
     "_id": "58809b1b5824d76267da4b8f",
     "updatedAt": "2017-01-19T10:55:23.613Z",
     "createdAt": "2017-01-19T10:55:23.613Z",
     "text": "azerfgrgerefty",
     "author": "58809078b267b15839f011d1",
     "__v": 0
     },
     {
        "_id": "58809b1b5824d76267da4b8f",
        "updatedAt": "2017-01-19T10:55:23.613Z",
        "createdAt": "2017-01-19T10:55:23.613Z",
        "text": "azerfgrgerefty",
        "author": "58809078b267b15839f011d1",
        "__v": 0
     }
 ]
 *
 */

 /**
 * @api {get} /comment/:id getCommentById
 * @apiName getComment
 * @apiGroup Comment
 *
 * @apiParam {Integer} id id de l'comment à récupérer.
 *
 * @apiUse ReturnComment
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */

/**
 * @api {post} /comment createComment
 * @apiName createComment
 * @apiGroup Comment
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} video The video's id.
 * @apiParam {String} text The comment's text.
 * @apiParam {String} author The author's id.
 *
 * @apiParamExample {json} Request-Example:
 {
     "video": "58898078b267b15839cd2dd1",
     "text": "Ceci est un commentaire",
     "author": "58809078b267b15839f011d1"
 }

 * @apiUse ReturnComment
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

/**
 * @api {put} /comment/:id updateComment
 * @apiName updateComment
 * @apiGroup Comment
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du comment à modifier.
 * @apiUse PostComment
 *
 * @apiUse ReturnComment
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /comment/:id deleteComment
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
    "message":"removed"
 }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

/**
 * @apiDefine ReturnComment
 * @apiSuccess {String} _id The comment's id.
 * @apiSuccess {Datetime} updatedAt The comment date updated.
 * @apiSuccess {Datetime} createdAt The comment date created.
 * @apiSuccess {String} text The comment's text.
 * @apiSuccess {String} author The author's id.
 * @apiSuccess {String} __v The comment's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
 {
    "_id": "58809b1b5824d76267da4b8f",
    "updatedAt": "2017-01-19T10:55:23.613Z",
    "createdAt": "2017-01-19T10:55:23.613Z",
    "text": "azerfgrgerefty",
    "author": "58809078b267b15839f011d1",
    "__v": 0
  }
 */

/**
 * @apiDefine PostComment

 * @apiParam {String} text The comment's text.
 *
 * @apiParamExample {json} Request-Example:
 {
     "text": "Ceci est un commentaire"
 }
 */