module.exports = function(app) {
    var playlistController = require('../controllers/PlaylistController.js');

    /**
     * @api {get} /playlist/:id/video Voir les videos
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
     */

    app.get('/playlist/:id/video/:idvideo', playlistDAO.getAllVideo);

    /**
     * @api {post} /playlist Création d'un playlist
     * @apiName createPlaylist
     * @apiGroup Playlist
     *
     * @apiPermission authentificated
     *
     * @apiParam {Integer} id id de la playlist concernée
         * @apiParam {Integer} idvideo id de la video à ajouter
     *
     * @apiSuccess {Playlist} playlist Retourne le playlist créée.
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

    app.post('/playlist/:id/video/:idvideo', playlistDAO.addVideo);

    /**
     * @api {delete} /playlist/:id/video/:idvideo Suppression d'une video d'une playlist
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
        "message":"success"
     }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     */

    app.delete('/playlist/:id/video/:idvideo', playlistDAO.removeVideo);

};

/**
 * @api {get} /playlist Voir les playlists
 * @apiName getAllPlaylist
 * @apiGroup Playlist
 *
 * @apiPermission authentificated
 *
 *
 * @apiSuccess [playlists] playlists Retourne toutes les playlists
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
 * @api {get} /playlist/:id Voir un playlist
 * @apiName getPlaylist
 * @apiGroup Playlist
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id du playlist à récupérer.
 *
 * @apiSuccess [playlist] playlist Retourne le playlist voulu.
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
 * @api {post} /playlist Création d'un playlist
 * @apiName createPlaylist
 * @apiGroup Playlist
 *
 * @apiPermission authentificated
 *
 * @apiParam {String} texte message à envoyer.
 * @apiParam {Integer} idvideo
 *
 * @apiSuccess {Playlist} playlist Retourne le playlist créée.
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
 * @api {delete} /playlist/:id Suppression d'un playlist
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
    "message":"success"
 }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */