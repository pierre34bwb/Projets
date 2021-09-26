var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Trajets = require('./trajetModel');

router.get('/', function (req,res){
    Trajets.getTrajet(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows)
        }
    });
});

router.post('/', function (req){
    Trajets.createTrajet(req.body,(err,rows) => {});
});

router.put('/', function (req, res){
    Trajets.updateTrajet(req.body,(err,count) => {});
});  

router.delete('/', function (req, res){
    Trajets.deleteTrajet(req.body,(err,count) => {});
});

module.exports = router;