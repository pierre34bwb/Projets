var mysql = require('mysql');
var connexion = mysql.createConnection({   //je crée la connection vers la bdd
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'lastcar'
});

//je me connecte à la bdd, si connecté envoie dans la console Connecté à la base de données MySQL!
connexion.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

  //j'exporte la connection vers les models
  module.exports = connexion;