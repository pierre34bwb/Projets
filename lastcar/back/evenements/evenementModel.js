var db = require('../connexion');

var Event = {
    getEvents: function(callback){
        return db.query('SELECT * from evenements', callback);
    },
    createEvents: function(Event, callback){
        return db.query('Insert into evenements(num_participant_conducteur, num_participant_passager, type_event, date_debut_event, date_fin_event, description_event, nb_places) values(?,?,?,?,?,?,?)', 
        [Event.num_participant_conducteur, Event.num_participant_passager, Event.eventType, Event.dateDebutEvent, Event.dateFinEvent, Event.description, Event.nbPlaceEvent], callback);
    },
    deleteEvents: function(Membre, callback){
        return db.query('DELETE from evenements WHERE id_evenements = ?', [Membre.id_membre], callback);
    }

}

module.exports = Event;