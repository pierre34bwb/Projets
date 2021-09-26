var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var PassagerTrajets = require('./passager_covoiturageModel');

router.get('/tajetspassager', function (req,res){
    PassagerTrajets.getPassagers(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows)
        }
    });
});

router.post('/newtrajetpassager', function (req){
    PassagerTrajets.newTrajetPassager(req.body,(err,rows) => {});
});

router.put('/', function (req, res){
    PassagerTrajets.updatePassagers(req.body,(err,count) => {});
});  

router.delete('/', function (req, res){
    PassagerTrajets.deletePassagers(req.body,(err,count) => {});
});

module.exports = router;