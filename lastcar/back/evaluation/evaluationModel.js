var db = require('../connexion');

var Evaluation = {
    getEvaluations: function(callback){
        return db.query('SELECT * from evaluation', callback);
    },
    createEvaluations: function(Evaluation, callback){
        return db.query('Insert into evaluation(num_membre_envoyeur, num_membre_receveur, note, commentaire, date_du_trajet, commentaire_valide) values(?,?,?,?,?,?)', 
        [Evaluation.num_envois_envoyeur, Evaluation.num_membre_receveur, Evaluation.note, Evaluation.commentaire, Evaluation.dateNote, Evaluation.validCommentaire], callback);
    },
    updateEvaluations: function(Evaluation, callback){
        return db.query('UPDATE evaluation SET commentaire_valide = ?', [Evaluation.validCommentaire], callback);
    },
    deleteEvaluations: function(Evaluation, callback){
        return db.query('DELETE from evaluation WHERE id_evaluation = ?', [Evaluation.id_evaluation], callback);
    }

}

module.exports = Evaluation;