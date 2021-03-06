/**
 * Author : Edouard Germain
 */

module.exports = function(app,passport) {
    var videoController = require('../controllers/VideoController.js');
    var authController = require('../controllers/AuthController.js')(passport);


    /**
     * @api {get} /user/me/video getMyVideo
     * @apiName getMyVideo
     * @apiGroup Video
     *
     * @apiSuccess Array[videos] videos Retourne toutes les videos de l'utilisateur connecté.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     * [{
    "_id": "589cd41e1f46b2288fe72ddb",
    "updatedAt": "2017-02-09T20:42:06.727Z",
    "createdAt": "2017-02-09T20:42:06.727Z",
    "name": "Benjam - Bla Bla Bla  [Official music video] HD",
    "privacy": false,
    "youtube": "Faxq8ufTcNQ",
    "thunbmail": "https://i.ytimg.com/vi/Faxq8ufTcNQ/mqdefault.jpg",
    "author": "58988e485979a510347a7e1b",
    "like": 0,
    "comment": 0
  },
     {
       "_id": "589cd4211f46b2288fe72ddc",
       "updatedAt": "2017-02-09T20:42:09.398Z",
       "createdAt": "2017-02-09T20:42:09.398Z",
       "name": "El Micha - Bla Bla Bla ( Video Official )",
       "privacy": false,
       "youtube": "oy7QpGUjcI8",
       "thunbmail": "https://i.ytimg.com/vi/oy7QpGUjcI8/mqdefault.jpg",
       "author": "58988e485979a510347a7e1b",
       "like": 0,
       "comment": 0
     }
     ]
     *
     */


    app.get('/user/me/video', authController.isAuthenticated, videoController.videoCurrentUser);

    /**
     * @api {get} /user/:id/video getVideoByUserId
     * @apiName getVideoByUserId
     * @apiGroup Video
     *
     * @apiParam {String} id id de l'utilisateur dont on veut les vidéos.
     *
     * @apiSuccess Array[videos] videos Retourne toutes les videos d'un user
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     * [{
    "_id": "589cd41e1f46b2288fe72ddb",
    "updatedAt": "2017-02-09T20:42:06.727Z",
    "createdAt": "2017-02-09T20:42:06.727Z",
    "name": "Benjam - Bla Bla Bla  [Official music video] HD",
    "privacy": false,
    "youtube": "Faxq8ufTcNQ",
    "thunbmail": "https://i.ytimg.com/vi/Faxq8ufTcNQ/mqdefault.jpg",
    "author": "58988e485979a510347a7e1b",
    "like": 0,
    "comment": 0
  },
     {
       "_id": "589cd4211f46b2288fe72ddc",
       "updatedAt": "2017-02-09T20:42:09.398Z",
       "createdAt": "2017-02-09T20:42:09.398Z",
       "name": "El Micha - Bla Bla Bla ( Video Official )",
       "privacy": false,
       "youtube": "oy7QpGUjcI8",
       "thunbmail": "https://i.ytimg.com/vi/oy7QpGUjcI8/mqdefault.jpg",
       "author": "58988e485979a510347a7e1b",
       "like": 0,
       "comment": 0
     }
     ]
     *
     */


    app.get('/user/:id/video',  videoController.videoByUserId);

    /**
     * @api {get} /video/youtube/:idyoutube getVideoByYoutubeId
     * @apiName getVideoByYoutubeId
     * @apiGroup Video
     *
     * @apiParam {String} idyoutube id youtubbe des videos à récupérer.
     *
     * @apiSuccess Array[videos] videos Retourne toutes les videos youtube associées à l'id
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     [
     {
       "_id": "50987e094d99abgtgtb206c71",
       "updatedAt": "2017-01-22T18:58:40.688Z",
       "createdAt": "2017-01-22T18:58:40.688Z",
       "name": "Nom de la vidéo",
       "url": "azrezr",
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
       "url": "azrezr",
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
    app.get('/video/youtube/:youtube',  videoController.findByIdYoutube);


    require('./base/index')(app,passport,"Video");
};

/**
 * @api {get} /video getAllVideo
 * @apiName getAllVideo
 * @apiGroup Video
 *
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
       "youtube": "youtube.fr?w=azrezr",
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
       "youtube": "youtube.fr?w=azrezr",
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
 * @apiParam {String} id id du video à récupérer.
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
 * @apiParam {String} id id du video à modifier.
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
 * @apiParam {String} id id du video à supprimer.
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
 * @apiSuccess {Datetime} updatedAt The video date updated.
 * @apiSuccess {Datetime} createdAt The video date created.
 * @apiSuccess {String} name The video's name.
 * @apiSuccess {Boolean} privacy The video's visibility.
 * @apiSuccess {String} youtube The youtube video's id.
 * @apiSuccess {String} thunbmail The video's thunbmail.
 * @apiSuccess {String} author The video's author.
 * @apiSuccess {Array[Comment]} comments The video's comments.
 * @apiSuccess {Array[Annotation]} annotations The video's annotations.
 * @apiSuccess {Array[Like]} likes The video's likes.
 * @apiSuccess {String} __v The video's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
 {
      "_id": "588500e094d99ab84b206c71",
      "updatedAt": "2017-01-22T23:12:20.629Z",
      "createdAt": "2017-01-22T18:58:40.688Z",
      "name": "Nom de la vidéo",
      "youtube": "azrezr",
      "privacy": false,
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
 * @apiParam {String} youtube The youtube video's id.
 * @apiSuccess {Boolean} privacy The video's visibility.
 * @apiParam {String} [thunbmail] The video's thunbmail.
 *
 * @apiParamExample {json} Request-Example:
 {
	"name":"Nom de la vidéo",
    "youtube":"azrezr",
  	"thunbmail":"youtube.fr/img.jpg",
  	"privacy": false
}
 */