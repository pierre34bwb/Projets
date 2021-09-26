var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Membres = require('./membreModel'); //je declare une variable et je lui donne comme valeure le require du model
var _ = require('lodash'); //equivalent du === , et permet de comparer des données json brutes


//methode inscription redirigée vers /inscription
router.post('/inscription', function (req){
    Membres.inscription(req.body,(err,rows) => {}); //j'appelle la variable Membres au model et j'invoque une des methodes associée
});

//methode pour lister les membres redirigée vers /liste/membre
router.get('/liste/membre', function (req,res){
    Membres.readMembres(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{ 
            res.send(rows)
        }
    });
});


router.put('/', function (req, res){
    Membres.updateMembresf(req.body,(err,count) => {});
});

//metode pour mettre à jour le statut d'un membre redirigée vers /liste/membremaj
router.put('/liste/membremaj', function (req, res){
    Membres.updateMembres(req.body,(err,count) => {});
}); 


//metode pour se connecter redirigée vers /login
router.post('/login', function (req, res){
    Membres.login(req.body,(err,rows) => {
        
        //je declare une variable et je lui donne comme valeur une chaine de caractère admin,
        // membre et visiteur afin de  les comparer avec le status obtenu de la requête
        var statusAdmin = 'admin';
        var statusMembre = 'membre';
        var statusVisiteur = 'visiteur';


        if(rows.length > 0){
        //je compare les variables avec isEqual , qui est equivalent à ===, mais permet en plus de comparer des données brutes json
        var status = Object.values(JSON.parse(JSON.stringify(rows)));
        if(_.isEqual(statusAdmin, status[0].status)){      
            res.send(rows) //suivant le resultat du statut envoie les données rows 
            console.log('connecté en tant qu admin') 
                                    
        }else if(_.isEqual(statusMembre, status[0].status)){
            res.send(rows);
            console.log('connecté en tant que membre')
            
        }else{
            res.send(rows);
            console.log('connecté en tant que visiteur')
        }
        }else{
            //renvoie un message d'erreur de login vers react si aucun statut n'est trouvé
            res.send({message: "Mail ou mot de passe incorrect"}); 
        }
    });
});

//methode pour supprimer un utilisateur redirigée vers /api/delete/:id
router.delete('/api/delete/:id',function (req, res){
    Membres.deleteMembres(req.params,(err,count) => {});
        
});

//methode pour obtenir les données utilisateurs par l'id côté passager
router.get('/membrepassager/:id',function (req, res){
    Membres.readMembre(req.params,(err,rows) => {
        if(err){
            res.status(400).json(err);
        }else{
            console.log(rows) 
            res.send(rows)
        }
    });
});

//methode pour obtenir les données utilisateurs par l'id côté conducteur
router.get('/membreconducteur/:id',function (req, res){
    Membres.readMembre(req.params,(err,rows) => {
        if(err){
            res.status(400).json(err);
        }else{
            //console.log(rows) 
            res.send(rows)
        }
    });
});

module.exports = router;