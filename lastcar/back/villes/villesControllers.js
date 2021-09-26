var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Villes = require('./villeModel');


router.post('/getvilles', function (req, res){
    Villes.getVilles(req.body,(err,rows) => {

            if(rows.length > 1){
            var idVilles = Object.values(JSON.stringify(rows)); //je transforme tous les élements json en string
            var test = "".concat(...idVilles); //je fusionne les tableaux
            var numVille = test.match(/\d+/g).join(' ') //je récupere uniquement les id des villes et je les sépare d'un espace
            res.send({message: numVille}); //j'envoie le resultat au front sous forme de message
        }else{
            res.send({erreur: "Villes incorrectes, faites attention à votre ortographe"});
        }   //sinon j'envoie un message d'erreur au front

    });
});
module.exports = router;