var db = require('../connexion');

var Conducteur = {
    getConducteurs: function(callback){
        return db.query('SELECT membres.prenom, membres.nom, nombre_de_passagers, type_de_voiture, type_de_voiture, telephone, DATE_FORMAT(jour_de_depart, "%d/%m/%Y") AS dateTrajet,a.nom_ville as ville1, b.nom_ville AS ville2, tarif FROM `conducteur_covoiturage` LEFT JOIN membres ON conducteur_covoiturage.num_conducteur = membres.id INNER JOIN villes a ON conducteur_covoiturage.num_ville_depart = a.id_villes INNER JOIN villes b ON conducteur_covoiturage.num_ville_arrivee = b.id_villes WHERE 1', callback);
    },
    newTrajetConducteur: function(Conducteur, callback){
        db.query('Insert into conducteur_covoiturage(num_conducteur, num_ville_depart, num_ville_arrivee, tarif, jour_de_depart, nombre_de_passagers, type_de_voiture, fumeur_oui_non, type_de_trajet, validation_trajet) values(?,?,?,?,?,?,?,?,?,?)', 
        [Conducteur.num_conducteur, Conducteur.num_ville_debut, Conducteur.num_ville_arrive, Conducteur.tarifCoVoit, Conducteur.dateDebutCoVoit,Conducteur.nombre_de_passager, Conducteur.typeVehicule, Conducteur.fumeur, Conducteur.typeRouteCoVoit, Conducteur.trajetValid], callback);
    },
    updateConducteurs: function(Conducteur, callback){
        return db.query('UPDATE conducteur_covoiturage SET validation_trajet = ?', [Conducteur.trajetValid], callback);
    },
    deleteConducteurs: function(Conducteur, callback){
        return db.query('DELETE from conducteur_covoiturage WHERE id_conducteur = ?', [Conducteur.id_membre], callback);
    }

}

module.exports = Conducteur;