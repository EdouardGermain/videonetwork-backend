/*
 * do not modify
 * use "object"DAO.js instead
 * */

module.exports = function (Object){
    var module = {};

    module.findAll = function(req,res)
    {
        Object.Model.find(null, function (err, result) {
            if (err) {
                res.send(500, { message: err });
            }else{
                res.json(result);
            }
        });
    };
    module.findById = function(req,res) {
            Object.Model.findById(req.param('id'),function (err, result) {
                if (err) {
                    res.send(500, { message: err });
                }
                else if(!result){
                    res.send(404, { message: "not found" });
                }
                else{
                    res.json(result);
                }
            });
        };
    module.add = function(req,res) {
                Object.Model.create(req.body, function (err, result) {
                    if (err) {
                        res.send(400, {message: err});
                    } else {
                        res.send(201, result);
                    }
                });

    };


    module.update =  function(req,res) {
            Object.Model.update({author : req.user , '_id': req.param('id')}, req.body, function (err, modifed) {
                if (err) {
                    res.send(400, {message: err});
                } else if (modifed.nModified == 0){res.send(401, { message: "Unauthorized" });}
                else {
                    Object.Model.findById(req.param('id'),function (err, result) {
                        if (err) {
                            res.send(400, { message: err });
                        }else{
                            res.json(result);
                        }
                    });
                }
            });
    };
    module.remove =function(req,res) {
            Object.Model.remove({$or: [
                {$and : [ {author : req.user} , {'_id': req.param('id')}]},
                { $and : [ {'_id': req.user._id} , {'_id': req.param('id')}]}
            ]}, function (err, modifed) {
                if (err) {
                    res.send(400, {message: err});
                }
                else if (modifed.result.n == 0){res.send(401, { message: "Unauthorized" });}
                else {
                    res.send(200,{ message: "removed" });
                }
            });
    };
    return module;

};


