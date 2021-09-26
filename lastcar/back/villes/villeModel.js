var db = require('../connexion');

var Ville = {
    getVilles: function(Ville, callback){
        return db.query('SELECT id_villes FROM villes WHERE nom_ville = ? UNION SELECT id_villes FROM villes WHERE nom_ville = ?', [Ville.nom_ville_depart, Ville.nom_ville_fin], callback);
    }
 

}

module.exports = Ville;