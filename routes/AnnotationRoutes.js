module.exports = function(app,passport) {
    //var annotationController = require('../controllers/AnnotationController.js');

    require('./base/index')(app,passport,"Annotation");
};

/**
 * @api {get} /annotation getAllAnnotation
 * @apiName getAllAnnotation
 * @apiGroup Annotation
 *
 *
 * @apiSuccess Array[annotations] annotations Retourne toutes les annotations
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
     {
        "__v": 0,
        "updatedAt": "2017-01-22T19:18:06.578Z",
        "createdAt": "2017-01-22T19:18:06.578Z",
        "time_start": 12,
        "time_end": 14,
        "text": "annotation",
        "shape": {
            "type": "triangle",
            "position_x": 1,
            "position_y": 4,
            "_id": "5885056e891ae1bc0b31e98d"
        },
        "author": "58808dac2b70a556a40c98b0",
        "_id": "5885056e891ae1bc0b31e98c"
     },
     {
           "__v": 0,
           "updatedAt": "2017-01-22T19:18:06.578Z",
           "createdAt": "2017-01-22T19:18:06.578Z",
           "time_start": 12,
           "time_end": 14,
           "text": "annotation",
           "shape": {
               "type": "triangle",
               "position_x": 1,
               "position_y": 4,
               "_id": "5885056e891ae1bc0b31e98d"
           },
           "author": "58808dac2b70a556a40c98b0",
           "_id": "5885056e891ae1bc0b31e98c"
      }

 ]
 *
 */

 /**
 * @api {get} /annotation/:id getAnnotationById
 * @apiName getAnnotationById
 * @apiGroup Annotation
 *
 *
 * @apiParam {Integer} id id de l'annotation à récupérer.
 *
 * @apiUse ReturnAnnotation
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */

/**
 * @api {post} /annotation createAnnotation
 * @apiName createAnnotation
 * @apiGroup Annotation
 *
 * @apiPermission authentificated
 *
 * @apiUse PostAnnotation
 *
 * @apiUse ReturnAnnotation
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

/**
 * @api {put} /annotation/:id updateAnnotation
 * @apiName updateAnnotation
 * @apiGroup Annotation
 *
 * @apiPermission authentificated
 *
 * @apiParam {Integer} id id de l'Annotation à modifier.
 * @apiUse PostAnnotation
 *
 * @apiUse ReturnAnnotation
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /annotation/:id deleteAnnotation
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
    "message":"removed"
 }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */


/**
 * @apiDefine ReturnAnnotation
 * @apiSuccess {String} _id The annotation's id.
 * @apiSuccess {Datetime} updatedAt The annotation updated date.
 * @apiSuccess {Datetime} createdAt The annotation created date.
 * @apiSuccess {Number} time_start The annotation s time start.
 * @apiSuccess {Number} time_end The annotation s time end.
 * @apiSuccess {String} text The annotation s text.
 * @apiSuccess {Shape} shape The annotation s shape.
 * @apiSuccess {String} author The annotation created date.
 * @apiSuccess {String} __v The annotation's version.
 *
 * @apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
     {
        "__v": 0,
        "updatedAt": "2017-01-22T19:18:06.578Z",
        "createdAt": "2017-01-22T19:18:06.578Z",
        "time_start": 12,
        "time_end": 14,
        "text": "annotation",
        "shape": {
            "type": "triangle",
            "position_x": 1,
            "position_y": 4,
            "_id": "5885056e891ae1bc0b31e98d"
        },
        "author": "58808dac2b70a556a40c98b0",
        "_id": "5885056e891ae1bc0b31e98c"
     }
 */

/**
 * @apiDefine PostAnnotation

 * @apiParam {Number} time_start annotation s time start.
 * @apiParam {Number} time_end annotation s time end.
 * @apiParam {String} text Annotation s text
 * @apiParam {Shape} shape voir exemple requête.

 *
 * @apiParamExample {json} Request-Example:
 {
       "time_start":12,
       "time_end":14,
       "text":"annotation",
       "shape":{ "type":"triangle","position_x":"1","position_y":"4"}
 }
 */