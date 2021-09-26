var app = require('./app');
var port = process.env.PORT || 3001;
var server = app.listen(port, function(){
    console.log('serveur express ecoute sur le port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});