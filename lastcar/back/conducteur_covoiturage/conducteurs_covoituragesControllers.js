var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var ConducteurTrajets = require('./conducteur_covoiturageModel');

router.get('/trajetsconducteur', function (req,res){
    ConducteurTrajets.getConducteurs(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            console.log(rows)
            res.json(rows)
        }
    });
});

router.post('/newtrajetconducteur', function (req){
    ConducteurTrajets.newTrajetConducteur(req.body,(err,rows) => {});
});

router.put('/', function (req, res){
    ConducteurTrajets.updateConducteurs(req.body,(err,count) => {});
});  

router.delete('/', function (req, res){
    ConducteurTrajets.deleteConducteurs(req.body,(err,count) => {});
});

module.exports = router;