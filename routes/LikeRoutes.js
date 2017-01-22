module.exports = function(app,passport) {
    var LikeController = require('../controllers/LikeController.js');
    require('./base/index')(app,passport,"Like");
};

/**
 * @api {get} /like getAllLike
 * @apiName getAllLike
 * @apiGroup Like
 *
 * @apiSuccess [likes] likes Retourne toutes les likes
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
     {
     "_id": "58809b1b5824d76267da4b8f",
     "updatedAt": "2017-01-19T10:55:23.613Z",
     "createdAt": "2017-01-19T10:55:23.613Z",
     "rate": 5,
     "author": "58809078b267b15839f011d1",
     "__v": 0
     },
     {
        "_id": "58809b1b5824d76267da4b8f",
        "updatedAt": "2017-01-19T10:55:23.613Z",
        "createdAt": "2017-01-19T10:55:23.613Z",
        "rate": 5,
        "author": "58809078b267b15839f011d1",
        "__v": 0
     }
 ]
 *
 */

/**
 * @api {get} /like/:id getLikeById
 * @apiName getLike
 * @apiGroup Like
 *
 * @apiParam {Integer} id id de l'like à récupérer.
 *
 * @apiUse ReturnLike
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */

/**
 * @api {post} /like createLike
 * @apiName createLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} video The video's id.
 * @apiParam {Number} rate The comment's text.
 * @apiParam {String} author The author's id.
 *
 * @apiParamExample {json} Request-Example:
 {
     "video": "58898078b267b15839cd2dd1",
     "rate": 4,
     "author": "58809078b267b15839f011d1"
 }
 * @apiUse ReturnLike
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

/**
 * @api {put} /like/:id updateLike
 * @apiName updateLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du like à modifier.
 * @apiUse PostLike
 *
 * @apiUse ReturnLike
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /like/:id deleteLike
 * @apiName deleteLike
 * @apiGroup Like
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id de l'like à supprimer.
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
 * @apiDefine ReturnLike
 * @apiSuccess {String} _id The like's id.
 * @apiSuccess {datetime} updatedAt The like date updated.
 * @apiSuccess {datetime} createdAt The like date created.
 * @apiSuccess {Number} rate The like's rate.
 * @apiSuccess {String} author The author's id.
 * @apiSuccess {String} __v The like's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
 {
    "_id": "58809b1b5824d76267da4b8f",
    "updatedAt": "2017-01-19T10:55:23.613Z",
    "createdAt": "2017-01-19T10:55:23.613Z",
    "rate":4,
    "author": "58809078b267b15839f011d1",
    "__v": 0
  }
 */

/**
 * @apiDefine PostLike

 * @apiParam {Number} rate The like's rate.
 * @apiParam {String} author The author's id.
 *
 * @apiParamExample {json} Request-Example:
 {
     "rate": 3,
     "author": "58809078b267b15839f011d1"
 }
 */