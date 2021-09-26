import React, { useState, useEffect } from "react";
import '../App.css';
import membre from "../img/listemembrevisiteur.jpg"; //import d'une image
import trajet from "../img/listetrajetvisiteur.jpg"; //import d'une image
import imageEvent from "../img/event.jpg"; //import d'une image
import imageMessage from "../img/message.jpg"; //import d'une image
import imageNotif from "../img/notif.png"; //import d'une image
import Axios from 'axios';  //permet de faire des requetes asynchrones depuis le back
import $ from 'jquery'; //import de jquery

const Admin = () => {


    const [statusAdmin, setStatusAdmin] = useState("admin");
    const [statusMembre, setStatusMembre] = useState("membre");

    const [membresList, setMembresList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/liste/membre').then((response) => {
          setMembresList(response.data);
        })
      }, [])

      //partie membres

      //pour passer le statut d'un utilisateur en admin
      const updateMembresAdmin = (id) => {
        Axios.put("http://localhost:3001/liste/membremaj", {
            id: id,
            status: statusAdmin, 
        });
        setStatusAdmin("");
      };
      
      //pour passer le statut d'un utilisateur en membre
      const updateMembres = (id) => {
        Axios.put("http://localhost:3001/liste/membremaj", {
            id: id,
            status: statusMembre,
        });
        setStatusMembre("");
      };

      //pour supprimer un utilisateur
      const deleteMembres = (membre) => {
        Axios.delete(`http://localhost:3001/api/delete/${membre}`);
        };

      //jquery pour afficher liste
          $("#affiche_membres").click(function(){
            $("#listedesmembres").show();
            $("#listedesevents").css("display", "none");
            $("#adminevent").css("display", "none");
            $("#listedestrajets").css("display", "none");
            $("#listedesmessages").css("display", "none");
            $("#listedesnotifs").css("display", "none");
          });

          // Pour afficher seulement le tableau des évènements et le formulaire pour créer un évènement
  $("#affiche_evenements").click(function(){
    $("#listedesevents").show();
    $("#adminevent").show();
    $("#listedesmembres").css("display", "none");
    $("#listedestrajets").css("display", "none");
    $("#listedesmessages").css("display", "none");
    $("#listedesnotifs").css("display", "none");
  })

  // Pour afficher seulement le tableau des trajets
  $("#affiche_trajets").click(function(){
    $("#listedestrajets").show();
    $("#listedesmembres").css("display", "none");
    $("#listedesevents").css("display", "none");
    $("#adminevent").css("display", "none");
    $("#listedesmessages").css("display", "none");
    $("#listedesnotifs").css("display", "none");
  });

  // Pour seulement afficher le tableau des messages
  $("#affiche_messages").click(function(){
    $("#listedesmessages").show();
    $("#listedesmembres").css("display", "none");
    $("#listedesevents").css("display", "none");
    $("#adminevent").css("display", "none");
    $("#listedestrajets").css("display", "none");
    $("#listedesnotifs").css("display", "none");
  });

  // Pour seulement afficher le tableau des notifs
  $("#affiche_notifs").click(function(){
    $("#listedesnotifs").show();
    $("#listedesmembres").css("display", "none");
    $("#listedesevents").css("display", "none");
    $("#adminevent").css("display", "none");
    $("#listedestrajets").css("display", "none");
    $("#listedesmessages").css("display", "none");
  });
          
        
      
    
    return (
        <div>
            
            <main>
    <div className="container-fluid">
        <div className="row" id="dashboard">
            <div className="col-1">
                <img src={membre} className="Membres" id="affiche_membres" alt="img" />
            </div>

            <div className="col-1">
                <img src={imageEvent} className="evenements" id="affiche_evenements" alt="img" />
            </div>

            <div className="col-1"> 
                <img src={trajet} className="trajets" id="affiche_trajets" alt="img" />
            </div>

            <div className="col-1">
                <img src={imageMessage} className="messages" id="affiche_messages" alt="img" />
            </div>

            <div className="col-1">
                <img src={imageNotif} className="notifs"  id="affiche_notifs" alt="img" />
            </div>
        </div>
    </div>
  



            {/* Pour lister les membres sur le dashboard       */}

            <section className="container-fluid">
    <div className="row">

      {/* <!-- Tableau pour afficher tous les membres --> */}
        <div className="col-10 offset-1">
        <table className="table table-bordered" id="listedesmembres" style={{display: "none"}}>
              <thead>
                <tr>
                  <th >nom</th>
          	      <th>prenom</th>
                  <th>mail</th>
                  <th>telephone</th>
                  <th>adresse</th>
                  <th>mot de passe</th>
                  <th>statut</th>
                  <th>passer membre</th>
                  <th>passer admin</th>
                  <th>supprimer</th>
                </tr>
              </thead>
            <tbody>
      {/* j'appelle l'etat membreList et j'utilise map pour lister toutes les colonnes souhaitées de la tables membre */}
              {membresList.map((val) => {
                return  <tr>
                            <td>{val.nom}</td>
                            <td>{val.prenom}</td>
                            <td>{val.email}</td>
                            <td>{val.telephone}</td>
                            <td>{val.adresse}</td>
                            <td>{val.password}</td>
                            <td>{val.status}</td>
                            <input type="hidden" value={statusMembre} onChange={(e)=> {setStatusMembre(e.target.value) }}/>
                            <input type="hidden" value={statusAdmin} onChange={(e)=> {setStatusAdmin(e.target.value) }}/>
                            <td><button onClick={() => {updateMembres(val.id)}} className="btn btn-success">membre</button></td>
                            <td><button onClick={() => {updateMembresAdmin(val.id)}} className="btn btn-primary">admin</button></td>
                            <td><button onClick={() => {deleteMembres(val.id)}} class="btn btn-danger">supprimer</button></td>
                        </tr>
              })}
        
            </tbody>
            </table>
        </div>
    </div>

    {/* Pour afficher les evenements */}
    <div class="row">
    <div class = "col-lg-6 offset-3 text-center">
       <form method="POST" action="" id="adminevent" style={{display: "none"}}>
          <legend>Nouveau évènement</legend>       
          
          <p>
           <label for="eventType">Type d'évènement</label> :
           <input type="text" placeholder="Ex : Sportif" name="eventType" id="eventType" required/>
          </p>
          
          <p>
           <label for="dateDebutEvent">Date du</label> :
           <input type="date" placeholder="Ex : 13/09/2021" name="dateDebutEvent" id="dateDebutEvent" required/>
          
            <label for="dateFinEvent">Au</label> :
            <input type="date" placeholder="Ex : 15/09/2021" name="dateFinEvent" id="dateFinEvent" required/>
          </p>

          <p>
              <label for="description">Description</label> :
              <input type="text" placeholder="Ex : Pour le voir le match PSG - Clermont" name="description" id="description" required/>
          </p>

          <p>
            <label for="nbPlaceEvent">Nombre de places</label> :
            <input type="number" placeholder="Ex : 10" name="nbPlaceEvent" id="nbPlaceEvent" required/>
        </p>

        <p><button type="submit" className="btn boutton passager">Envoyer</button></p>

      </form>
    </div>
 </div>

    

    {/* <!-- Tableau pour afficher tous les trajets --> */}
    <div class="row">
        <div class="col-10 offset-1">
            <table class="table table-bordered" id="listedestrajets" style={{display: "none"}}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Ville de départ</th>
                    <th>Ville d'arrivée</th>
                    <th>Date</th>
                    <th>Créer par </th>
                    <th>Trajet valide</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Pouzolles</td>
                    <td>Béziers</td>
                    <td>12/09/2021</td>
                    <td>Delannoy Pierre</td>
                    <td>Oui</td>
                    <td><input type="button" class="btn btn-success" value="Modifier" /></td>
                    <td><input type="button" class="btn btn-danger" value="Supprimer" /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Delannoy</td>
                    <td>Pierre</td>
                    <td>27/11/1999</td>
                    <td>21 ans</td>
                    <td>5</td>
                    <td><input type="button" class="btn btn-success" value="Modifier" /></td>
                    <td><input type="button" class="btn btn-danger" value="Supprimer" /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Delannoy</td>
                    <td>Pierre</td>
                    <td>27/11/1999</td>
                    <td>21 ans</td>
                    <td>5</td>
                    <td><input type="button" class="btn btn-success" value="Modifier" /></td>
                    <td><input type="button" class="btn btn-danger" value="Supprimer" /></td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>


        {/* <!-- Tableau pour afficher tous les messages --> */}
        <div class="row">
          <div class="col-10 offset-1">
              <table class="table table-bordered" id="listedesmessages" style={{display: "none"}}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Message de</th>
                      <th>Date</th>
                      <th>Message</th>
                      <th>Supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Huard Maxime</td>
                      <td>23/09/2021</td>
                      <td>J'ai une question, pourquoi?</td>
                      <td><input type="button" class="btn btn-danger" value="Supprimer"/></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Delannoy</td>
                      <td>Pierre</td>
                      <td>27/11/1999</td>
                      <td><input type="button" class="btn btn-danger" value="Supprimer"/></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Delannoy</td>
                      <td>Pierre</td>
                      <td>27/11/1999</td>
                      <td><input type="button" class="btn btn-danger" value="Supprimer"/></td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>


      {/* <!-- Tableau pour afficher toutes les notifs --> */}
      <div class="row">
        <div class="col-10 offset-1">
            <table class="table table-bordered" id="listedesnotifs" style={{display: "none"}}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>23/09/2021</td>
                    <td>J'ai une question, pourquoi?</td>
                    <td><input type="button" class="btn btn-danger" value="Supprimer"/></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Pierre</td>
                    <td>27/11/1999</td>
                    <td><input type="button" class="btn btn-danger" value="Supprimer"/></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Pierre</td>
                    <td>27/11/1999</td>
                    <td><input type="button" class="btn btn-danger" value="Supprimer"/></td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>

</section>
</main>

        </div>
    );
            
                       
};


export default Admin;