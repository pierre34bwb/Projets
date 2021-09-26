var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Evaluation = require('./evaluationModel');

router.get('/', function (req,res){
    Evaluation.getEvaluations(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows)
        }
    });
});

router.post('/', function (req){
    Evaluation.createEvaluations(req.body,(err,rows) => {});
});

router.put('/', function (req, res){
    ConducteurTrajets.updateEvaluations(req.body,(err,count) => {});
});  

router.delete('/', function (req, res){
    ConducteurTrajets.deleteEvaluations(req.body,(err,count) => {});
});

module.exports = router;