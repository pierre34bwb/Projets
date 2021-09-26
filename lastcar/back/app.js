var express = require('express'); //je require express
var app = express(); //j'integre express à une variable pour l'utiliser
var cors = require('cors'); //permet d'autoriser le transfert des ressources souhaitées sur un serveur Web en fonction de l'endroit où la requête HTTP a été initiée
app.use(cors()); //j'utilise cors
app.set('view engine', 'ejs'); //permet à express d'afficher un rendu (utilisé lors des tests)

var MembresControllers = require('./membres/membresControllers');//je declare une variable et je donne comme valeur le controller souhaité, puis je l'associe à la méthode et redirection demandée
app.use('/membreModel', MembresControllers);//j'appelle le model membre pour pouvoir récuperer et appeller les méthodes
app.post('/login', MembresControllers); //je definie la methode, la redirection , et le controller pour qu'il puisse communiquer avec react
app.get('/liste/membre', MembresControllers);
app.get('/membrepassager/:id', MembresControllers);
app.get('/membreconducteur/:id', MembresControllers);
app.post('/inscription', MembresControllers); 
app.put('/', MembresControllers);
app.put('/liste/membremaj', MembresControllers);
app.delete('/api/delete/:id', MembresControllers);


var MessagesControllers = require('./boite_de_messagerie/boite_de_messageriesControllers');
app.use('/boite_de_messagerieModel', MessagesControllers);
app.get('/', MessagesControllers);
app.post('/', MessagesControllers);
app.delete('/', MessagesControllers);


var ConducteursTrajetsControllers = require('./conducteur_covoiturage/conducteurs_covoituragesControllers');
app.use('/conducteur_covoiturageModel', ConducteursTrajetsControllers);
app.get('/trajetsconducteur', ConducteursTrajetsControllers);
app.post('/newtrajetconducteur', ConducteursTrajetsControllers);
app.put('/', ConducteursTrajetsControllers);
app.delete('/', ConducteursTrajetsControllers);

var PassagerTrajetsControllers = require('./passager_covoiturage/passagers_covoituragesControllers');
app.use('/passager_covoiturageModel', PassagerTrajetsControllers);
app.get('/tajetspassager', PassagerTrajetsControllers);
app.post('/newtrajetpassager', PassagerTrajetsControllers);
app.put('/', PassagerTrajetsControllers);
app.delete('/', PassagerTrajetsControllers);

var EvaluationsControllers = require('./evaluation/evaluationsControllers');
app.use('/evaluationModel', EvaluationsControllers);
app.get('/', EvaluationsControllers);
app.post('/', EvaluationsControllers);
app.put('/', EvaluationsControllers);
app.delete('/', EvaluationsControllers);

var AlertsControllers = require('./alert/alertsControllers');
app.use('/alertModel', AlertsControllers);
app.get('/', AlertsControllers);
app.post('/', AlertsControllers);
app.delete('/', AlertsControllers);

var EvenementsControllers = require('./evenements/evenementsControllers');
app.use('/evenementModel', EvenementsControllers);
app.get('/', EvenementsControllers);
app.post('/', EvenementsControllers);
app.delete('/', EvenementsControllers);

var VillesControllers = require('./villes/villesControllers');
app.use('/villeModel', VillesControllers);
app.post('/getvilles', VillesControllers);

module.exports = app;