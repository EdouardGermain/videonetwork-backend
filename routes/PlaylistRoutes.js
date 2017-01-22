module.exports = function(app,passport) {
    var playlistController = require('../controllers/PlaylistController.js');
    var authController = require('../controllers/AuthController')(passport);
    /**
     * @api {get} /playlist/:id/video getAllVideoFromPlaylist
     * @apiName getAllVideo
     * @apiGroup Video
     *
     *
     * @apiParam {Integer} id id de la playlist.
     *
     * @apiSuccess Array[videos] videos Retourne toutes les videos
     *
     *
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
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     */

    app.get('/playlist/:id/video/:idvideo', playlistController.getAllVideo);

    /**
     * @api {post} /playlist/:id/video/:idvideo addVideoToPlaylist
     * @apiName addVideoToPlaylist
     * @apiGroup Playlist
     *
     * @apiPermission authentificated
     *
     * @apiParam {Integer} id id de la playlist concernée
     * @apiParam {Integer} idvideo id de la video à ajouter
     *
     * @apiUse ReturnPlaylist
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     */

    app.post('/playlist/:id/video/:idvideo', authController.isAuthenticated, playlistController.addVideo);

    /**
     * @api {delete} /playlist/:id/video/:idvideo deleteVideoFromPlaylist
     * @apiName deleteVideoFromPlaylist
     * @apiGroup Playlist
     *
     * @apiPermission authentificated
     *
     * @apiParam {Integer} id id de la playlist concernée
     * @apiParam {Integer} idvideo id de la video à supprimer
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

    app.delete('/playlist/:id/video/:idvideo', authController.isAuthenticated,playlistController.removeVideo);

    require('./base/index')(app,passport,"playlist");
};

/**
 * @api {get} /playlist getAllPlaylist
 * @apiName getAllPlaylist
 * @apiGroup Playlist
 *
 *
 * @apiSuccess Array[playlists] playlists Retourne toutes les playlists
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
     {
       "_id": "588508db891ae1bc0b31e98f",
       "updatedAt": "2017-01-22T19:33:23.984Z",
       "createdAt": "2017-01-22T19:32:43.074Z",
       "name": "maplaylist",
       "__v": 0,
       "videos": [
         "588500e094d99ab84b206c71"
       ]
     },
     {
       "_id": "588500e094d99abfrb206c71",
       "updatedAt": "2017-01-22T19:33:23.984Z",
       "createdAt": "2017-01-22T19:32:43.074Z",
       "name": "maplaylist2",
       "__v": 0,
       "videos": [
         "588500e094d99ab84b206c71"
       ]
     }
 ]
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */

 /**
 * @api {get} /playlist/:id getPlaylistById
 * @apiName getPlaylistById
 * @apiGroup Playlist
 *
 *
 * @apiParam {Integer} id id du playlist à récupérer.
 *
 * @apiUse ReturnPlaylist
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */

/**
 * @api {post} /playlist createPlaylist
 * @apiName createPlaylist
 * @apiGroup Playlist
 *
 * @apiPermission authentificated
 *
 * @apiUse PostPlaylist
 *
 * @apiUse ReturnPlaylist
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

/**
 * @api {put} /playlist/:id updatePlaylist
 * @apiName updatePlaylist
 * @apiGroup Playlist
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du playlist à modifier.
 * @apiUse PostPlaylist
 *
 * @apiUse ReturnPlaylist
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /playlist/:id deletePlaylist
 * @apiName deletePlaylist
 * @apiGroup Playlist
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du playlist à supprimer.
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
 * @apiDefine ReturnPlaylist
 * @apiSuccess {String} _id The playlist's id.
 * @apiSuccess {datetime} updatedAt The playlist date updated.
 * @apiSuccess {datetime} createdAt The playlist date created.
 * @apiSuccess {String} name The playlist's name.
 * @apiSuccess {Array[video]} videos The playlist's videos.
 * @apiSuccess {String} __v The like's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
     {
           "_id": "588508db891ae1bc0b31e98f",
           "updatedAt": "2017-01-22T19:33:23.984Z",
           "createdAt": "2017-01-22T19:32:43.074Z",
           "name": "maplaylist",
           "__v": 0,
           "videos": [
             "588500e094d99ab84b206c71"
           ]
     }

 */

/**
 * @apiDefine PostPlaylist

 * @apiParam {String} name The playlist's name.
 *
 * @apiParamExample {json} Request-Example:
 {
     "name": "maplaylist"
 }
 */