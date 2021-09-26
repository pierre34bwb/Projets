var db = require('../connexion');

var Messagerie = {
    getMessages: function(callback){
        return db.query('SELECT * from boite_de_messagerie', callback);
    },
    createMessages: function(Messagerie, callback){
        return db.query('Insert into membres(num_envoi_membre, num_destinataire_membre, message) values(?,?,?)', 
        [Messagerie.num_envois_membre, Messagerie.num_destinataire_membre, Messagerie.message], callback);
    },
    deleteMessages: function(Messagerie, callback){
        return db.query('DELETE from membres WHERE id_contact = ?', [Messagerie.id_membre], callback);
    },

}

module.exports = Messagerie;