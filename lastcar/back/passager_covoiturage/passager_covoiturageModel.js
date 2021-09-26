var db = require('../connexion');

var Passager = {
    getPassagers: function(callback){
        return db.query('SELECT membres.prenom,membres.nom, membres.telephone, DATE_FORMAT(date_depart, "%d/%m/%Y") AS dateTrajet,a.nom_ville as ville1, b.nom_ville AS ville2, tarif_covoit FROM `passager_covoiturage` LEFT JOIN membres ON passager_covoiturage.num_membre_passager = membres.id INNER JOIN villes a ON passager_covoiturage.num_ville_depart = a.id_villes INNER JOIN villes b ON passager_covoiturage.num_ville_fin = b.id_villes WHERE 1', callback);
    },
    newTrajetPassager: function(Passager, callback){
        db.query('Insert into passager_covoiturage(num_membre_passager, num_ville_depart, num_ville_fin, tarif_covoit, date_depart, trajet_valide) values(?,?,?,?,?,?)', 
        [Passager.num_passager, Passager.num_ville_depart, Passager.num_ville_fin, Passager.tarif_Co_Voit, Passager.dateDepart, Passager.trajetValide], callback);
    },
    updatePassagers: function(Passager, callback){
        return db.query('UPDATE passager_covoiturage SET validation_trajet = ?', [Passager.trajetValid], callback);
    },
    deletePassagers: function(Passager, callback){
        return db.query('DELETE from passager_covoiturage WHERE id_passager = ?', [Passager.id_passager], callback);
    }

}

module.exports = Passager;