var db = require('../connexion');  //je declare une variable et je lui attribue comme valeur la connexion à la bdd 

//je crée un objet Membre et je lui donne toutes les requetes souhaitées
var Membre = {  
    readMembres: function(callback){
        return db.query('SELECT * from membres', callback);
    },
    inscription: function(Membre, callback){
        return db.query('Insert into membres(nom, prenom, adresse, telephone, date_de_naissance, email, status, conducteur_ou_passager, membre_normal_confiance, visibilite_profil, gestion_des_alert, photo, password) values(?,?,?,?,?,?,?,?,?,?,?,?,?)', 
        [Membre.lastName, Membre.firstName, Membre.adresse, Membre.telephone, Membre.ddn, Membre.mail, Membre.status, Membre.drive_passenger, Membre.member_stat, Membre.member_data, Membre.member_news, Membre.photo, Membre.password], callback);
    },
    deleteMembres: function(Membre, callback){
        return db.query('DELETE from membres WHERE id = ?', [Membre.id], callback);
    },
    updateMembresf: function(Membre, callback){
        db.query('UPDATE membres SET nom = ?, prenom = ?, adresse = ?, telephone = ?, email = ?, photo = ?, conducteur_ou_passager, membre_normal_confiance, visibilite_profil = ?, gestion_des_alert = ?, password = ?',
        [Membre.lastName, Membre.firstName, Membre.adresse, Membre.telephone, Membre.mail, Membre.photo, Membre.drive_passenger, Membre.member_stat, Membre.member_data, Membre.member.news, Membre.password], callback);
    },
    updateMembres: function(Membre, callback){
        db.query('UPDATE membres SET status = ? WHERE id = ?', [Membre.status, Membre.id], callback);
    },
    login: function(Membre, callback){
        return db.query('SELECT status, id FROM membres WHERE email = ? AND password = ?', [Membre.mail, Membre.password], callback);
        
    },
    readMembre: function(Membre, callback){
        return db.query('SELECT * from membres WHERE id = ?', [Membre.id], callback);
    }
}

module.exports = Membre;