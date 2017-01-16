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
                res.send(400, { message: err });
            }else{
                res.json(result);
            }
        });
    };
    module.findById = function(req,res) {
            Object.Model.findById(req.param('id'),function (err, result) {
                if (err) {
                    res.send(400, { message: err });
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
            Object.Model.update({_id: req.param('id')}, req.body, function (err) {
                if (err) {
                    res.send(400, {message: err});
                } else {
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
            Object.Model.remove({_id: req.param('id')}, function (err, result) {
                if (err) {
                    res.send(400, {message: err});
                } else {
                    res.send(200,{ message: "removed" });
                }
            });
    };
    return module;

};


