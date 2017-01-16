module.exports = function(app) {
    var playlistDAO = require('../dao/PlaylistDAO.js');

    app.get('/playlist/:id/video', playlistDAO.getAllVideo);
    app.post('/playlist/:id/video/:idvideo', playlistDAO.addVideo);
    app.delete('/playlist/:id/video/:idvideo', playlistDAO.removeVideo);

};