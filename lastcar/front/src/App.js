import React from 'react';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; //permet de definir les les routes de redirection
import Header from './component/header';//j'importe le component header de l'utilisateur non connecté
import HeaderConnect from './component/headerconnect'; //j'importe le component header de l'utilisateur  connecté
import Footer from './component/footer'; //j'importe le component footer
import Accueil from './pages/Accueil'; //j'importe le fichier accueil
import Inscription from './pages/Inscription'; //j'importe le fichier inscription
import Login from './pages/Login'; //j'importe le fichier connexion
import Visiteur from './pages/Visiteur'; //j'importe le fichier visiteur
import MembreConducteur from './pages/MembreConducteur'; //j'importe le fichier membre conducteur
import MembrePassager from './pages/MembrePassager'; //j'importe le fichier membre passager
import TrajetConducteur from './pages/TrajetConducteur';
import TrajetPassager from './pages/TrajetsPassager';
import Admin from './pages/Admin'; //j'importe le fichier administrateur

function App(){

    return (
    <Switch>
      <Route exact path="/" component={props => <div><Header /><Accueil /><Footer/></div>} /> {/*je definie les composants souhaités à afficher, et les redirections par rapport à l'url*/}
      <Route exact path="/inscription" component={props => <div><Header /><Inscription /><Footer/></div>} />
      <Route exact path="/login" component={props => <div><Header /><Login/><Footer/></div>} />
      <Route exact path="/visiteur/:id" component={props => <div><HeaderConnect /><Visiteur /><Footer/></div>} />
      <Route exact path="/membreConducteur/:id" component={props => <div><HeaderConnect /><MembreConducteur /><Footer/></div>} />
      <Route exact path="/membrePassager/:id" component={props => <div><HeaderConnect /><MembrePassager /><Footer/></div>} />
      <Route exact path="/TrajetConducteur/:id" component={props => <div><HeaderConnect /><TrajetConducteur /><Footer/></div>} />
      <Route exact path="/TrajetPassager/:id" component={props => <div><HeaderConnect /><TrajetPassager /><Footer/></div>} />
      <Route exact path="/admin/:id" component={props => <div><HeaderConnect /><Admin /><Footer/></div>} />
    </Switch>
  );
}

//j'exporte l'objet App vers le fichier index.js
export default App;
