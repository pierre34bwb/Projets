var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Event = require('./evenementModel');

router.get('/', function (req,res){
    Event.getEvents(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows)
        }
    });
});

router.post('/', function (req){
    Event.createEvents(req.body,(err,rows) => {});
});

router.put('/', function (req, res){
    Event.updateEvaluations(req.body,(err,count) => {});
});  

router.delete('/', function (req, res){
    Event.deleteEvents(req.body,(err,count) => {});
});

module.exports = router;