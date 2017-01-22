module.exports = function(app,passport) {
    var videoController = require('../controllers/VideoController.js');
    require('./base/index')(app,passport,"Video");
};

/**
 * @api {get} /video getAllVideo
 * @apiName getAllVideo
 * @apiGroup Video
 *
 *
 * @apiParam {Integer} id id du match à récupérer.
 *
 * @apiSuccess Array[videos] videos Retourne toutes les videos
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
     {
       "_id": "50987e094d99abgtgtb206c71",
       "updatedAt": "2017-01-22T18:58:40.688Z",
       "createdAt": "2017-01-22T18:58:40.688Z",
       "name": "Nom de la vidéo",
       "url": "youtube.fr?w=azrezr",
       "thunbmail": "youtube.fr/img.jpg",
       "author": "58808dac2b70a556a40c98b0",
       "__v": 0,
       "likes": [],
       "annotations": [],
       "comments": []
     },
     {
       "_id": "588500e094d99ab84b206c71",
       "updatedAt": "2017-01-22T18:58:40.688Z",
       "createdAt": "2017-01-22T18:58:40.688Z",
       "name": "Nom de la vidéo",
       "url": "youtube.fr?w=azrezr",
       "thunbmail": "youtube.fr/img.jpg",
       "author": "58808dac2b70a556a40c98b0",
       "__v": 0,
       "likes": [],
       "annotations": [],
       "comments": []
     }
 ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *
 */

 /**
 * @api {get} /video/:id getVideoById
 * @apiName getVideo
 * @apiGroup Video
 *
 *
 * @apiParam {Integer} id id du video à récupérer.
 *
 * @apiUse ReturnVideo
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */

/**
 * @api {post} /video createVideo
 * @apiName createVideo
 * @apiGroup Video
 *
 * @apiPermission authentificated
 *
 * @apiUse PostVideo
 *
 * @apiUse ReturnVideo
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */


/**
 * @api {put} /video/:id updateVideo
 * @apiName updateVideo
 * @apiGroup Video
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du video à modifier.
 * @apiUse PostVideo
 *
 * @apiUse ReturnVideo
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /video/:id deleteVideo
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
    "message":"removed"
 }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */



/**
 *
 * @apiDefine ReturnVideo
 * @apiSuccess {String} _id The video's id.
 * @apiSuccess {datetime} updatedAt The video date updated.
 * @apiSuccess {datetime} createdAt The video date created.
 * @apiSuccess {String} name The video's name.
 * @apiSuccess {String} url The video's url.
 * @apiSuccess {String} thunbmail The video's thunbmail.
 * @apiSuccess {String} author The video's author.
 * @apiSuccess {Array[Comment]} comments The video's comments.
 * @apiSuccess {Array[Annotation]} annotations The video's annotations.
 * @apiSuccess {Array[Like]} likes The video's likes.
 * @apiSuccess {String} __v The user's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
 {
      "_id": "588500e094d99ab84b206c71",
      "updatedAt": "2017-01-22T23:12:20.629Z",
      "createdAt": "2017-01-22T18:58:40.688Z",
      "name": "Nom de la vidéo",
      "url": "youtube.fr?w=azrezr",
      "thunbmail": "youtube.fr/img.jpg",
      "author": {
        "_id": "58808dac2b70a556a40c98b0",
        "updatedAt": "2017-01-19T09:58:04.457Z",
        "createdAt": "2017-01-19T09:58:04.457Z",
        "email": "a",
        "username": "a",
        "__v": 0
      },
      "__v": 0,
      "likes": [],
      "annotations": [],
      "comments": [
        {
          "_id": "58853c54610597e6ff73a8a1",
          "updatedAt": "2017-01-22T23:12:20.625Z",
          "createdAt": "2017-01-22T23:12:20.625Z",
          "text": "Ceci est un commentaire",
          "author": {
            "_id": "58853c13610597e6ff73a8a0",
            "updatedAt": "2017-01-22T23:11:15.618Z",
            "createdAt": "2017-01-22T23:11:15.618Z",
            "email": "fre",
            "username": "aze",
            "__v": 0
          },
          "__v": 0
        }
      ]
}
 */

/**
 *
 * @apiDefine PostVideo

 * @apiParam {String} name The video's name.
 * @apiParam {String} url The video's url.
 * @apiParam {String} [thunbmail] The video's thunbmail.
 *
 * @apiParamExample {json} Request-Example:
 {
	"name":"Nom de la vidéo",
    "url":"youtube.fr?w=azrezr",
  	"thunbmail":"youtube.fr/img.jpg"
}
 */