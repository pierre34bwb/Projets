var db = require('../connexion');

var Trajet = {
    getTrajet: function(callback){
        return db.query('SELECT * from trajets', callback);
    },
    createTrajet: function(Membre, callback){
        return db.query('Insert into trajets(nom, prenom, adresse, telephone, date_de_naissance, email, status, photo, conducteur_ou_passager, membre_normal_confiance, visibilite_profil, gestion_des_alert, password) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
        [Membre.lastName, Membre.firstName, Membre.adresse, Membre.telephone, Membre.ddn, Membre.mail, Membre.status, Membre.photo, Membre.drive_passenger, Membre.member_stat, Membre.member_data, Membre.member.news, Membre.photo, Membre.password], callback);
    },
    deleteTrajet: function(Membre, callback){
        return db.query('DELETE from trajets WHERE id_trajets = ?', [Membre.id_membre], callback);
    }

}

module.exports = Trajet;