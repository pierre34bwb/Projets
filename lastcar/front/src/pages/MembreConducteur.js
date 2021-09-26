import React, { useState, useEffect } from "react";
import '../App.css';
import Modal from "react-bootstrap/Modal";
import imagePassager from "../img/passager.png";
import imageMessage from "../img/message.jpg";
import imageEnvoi from "../img/message-envoyé.jpg";
import imageNotif from "../img/notif.png";
import imageEvent from "../img/event.jpg";
import imageGestion from "../img/gestionprofil.jpg";
import Axios from 'axios'; //permet de faire des requetes asynchrones depuis le back



function MembreConducteur(){

    let param = window.location.pathname; //je recupere le parametre de l'url
    let idMembre = param.substr(18,20); //je recupere les valeurs de param et je trie de maniere à garder l'id du membre 
    let valide = 1;//met sert à inserer comme valeur pour newtrajetconducteur, pour sa validité, vu que je ne fais pas la moderation côté admin
    let fumeur = 1;

    const [nom_ville_depart, setNomVille_depart] = useState("");
    const [nom_ville_fin, setNomVille_fin] = useState("");
    const [tarif_Co_Voit, setTarif_co_voit] = useState("");
    const [nbPassagers, setNbPassagers] = useState("");
    const [typeVehicule, setTypeVehicule] = useState("");
    const [dateDepart, setDateDepart] = useState("");
    const [trajetType, setTrajetType] = useState("");
    const [message, setMessage] = useState("");
    const [idVille, setIdVille] = useState("");
    const [idVilleDeux, setIdVilleDeux] = useState("");
    const [membre, setMembre] = useState([]);

    const [isOpenOne, setIsOpenOne] = React.useState(false); //modal


    const showModalOne = () => {
  
        setIsOpenOne(true);
    
      };

    const hideModalOne = () => {
  
        setIsOpenOne(false);
    
      };


    useEffect(() => {
        Axios.get(`http://localhost:3001${param}`).then((response) => {
          setMembre(response.data);
        })
      }, [param])        

    const getVilles = () => {
        Axios.post("http://localhost:3001/getvilles", {
            nom_ville_depart: nom_ville_depart,
            nom_ville_fin: nom_ville_fin
        }).then((response) => {
          
            if (response.data.erreur){
              setMessage(response.data.erreur)  //si resultat de la reponse est erreur alors ça affiche le message d'erreur
            }else{
                setMessage(null)  //si le resultat de la requete est bon mais que le message d'erreur etait affiché alors il disparrait 
                var data = response.data.message;
                var id = data.split(" "); //je regroupe les 2 id des villes dans un tableau              
                var idUn = id[0]; //je selectionne l'id index 0
                var idDeux = id[1]; //je selectionne l'id index 1
                setIdVille(idUn); //je recupere la valeur du premier id dans un hook d'etat
                setIdVilleDeux(idDeux); //je recupere la valeur du deuxieme id dans un hook d'etat
                var btn = document.getElementById("buttonfunction"); //je recupere l'id du bouton associé à la méthode newtrajetconducteur()
                btn.click(); //permet de declencher un clic du bouton, et ainsi démarrer la methode newtrajetconducteur()
                var inputVilleDepart = document.getElementById("villeDepartTrajet");
                inputVilleDepart.value = "";
                var inputVilleFin = document.getElementById("villeFinTrajet");
                inputVilleFin.value = "";
                var inputTarif = document.getElementById("tarifParPersonnes");
                inputTarif.value = "";
                var inputDate = document.getElementById("dateTrajet");
                inputDate.value = "";
                var inputTrajet = document.getElementById("typetrajet");
                inputTrajet.value = "";
                var inputViehiculeType = document.getElementById("typevehicule");
                inputViehiculeType.value = "";
                var inputNb = document.getElementById("nbpassager");
                inputNb.value = "";
            }})           
    }


    const newTrajetConducteur = () => {
        Axios.post("http://localhost:3001/newtrajetconducteur", {
            num_conducteur: idMembre,
            num_ville_debut: idVille,
            num_ville_arrive: idVilleDeux,
            tarifCoVoit: tarif_Co_Voit,
            dateDebutCoVoit: dateDepart,
            nombre_de_passager: nbPassagers,
            typeVehicule: typeVehicule,
            fumeur: fumeur,
            typeRouteCoVoit: trajetType,
            trajetValid: valide})
    }

    return (
        <div>


            {membre.map((val) => {
                return  <div>


    <main>
    <div className="container-fluid">
    <div className="row">
            <div className="col-2 offset-1">
                <p><a href={`/membrepassager/${val.id}`}><img src={imagePassager} id="espace_membre" alt="img"/></a></p>
            </div>

                        {/* <!-- Premier formulaire pour proposer un trajet --> */}
                        <div className="col-8 text-center">
                        <div className="form" id="trajetcovoit">
                        <legend>Proposer un trajet en tant que conducteur :</legend>


                            <label htmlFor="villeDepartTrajet">Départ:</label> 
                            <input type="text" id="villeDepartTrajet" name="nom_ville_depart" placeholder="ville de départ"
                            onChange={(e) => { setNomVille_depart(e.target.value);}}/>

                            <label htmlFor="villeFinTrajet">jusqu'à:</label>
                            <input type="text" id="villeFinTrajet" name="nom_ville_fin" placeholder="ville d'arrivée"
                            onChange={(e) => { setNomVille_fin(e.target.value);}}/>

                            <h6>{message}</h6> {/* message d'erreur */}

                            <label htmlFor="tarifParPersonnes">Tarifs:</label>
                            <input type="number" id="tarifParPersonnes" name="tarif_Co_Voit" placeholder="tarif covoiturage"
                            onChange={(e) => { setTarif_co_voit(e.target.value);}}/>

                            <label htmlFor="dateTrajet">Date:</label>
                            <input type="date" id="dateTrajet" name="dateDepart" placeholder="date de départ du trajet"
                            onChange={(e) => { setDateDepart(e.target.value);}}/>

                            <label htmlFor="Nombre_de_passager">Nombre de passager:</label>
                            <input type="text" id="nbpassager"  placeholder="nombre de passager"
                            onChange={(e) => { setNbPassagers(e.target.value);}}/>

                            <label htmlFor="Type_de_vehicule">Type de vehicule:</label>
                            <input type="text" id="typevehicule"  placeholder="type de vehicule"
                            onChange={(e) => { setTypeVehicule(e.target.value);}}/>

                            <label htmlFor="Type_de_trajet">Type de trajet:</label>
                            <input type="text" id="typetrajet"  placeholder="type de trajet"
                            onChange={(e) => { setTrajetType(e.target.value);}}/>

                            <button className="btn boutton passager" onClick={getVilles}>GO</button>
                            <button id="buttonfunction" onClick={newTrajetConducteur} style={{visibility: "hidden"}}>GO</button>
                        </div>                         
                    </div>

                
                
            
            {/* <!-- Deuxième formulaire pour rechercher un trajet --> */}

            <div className="col-8 offset-3 text-center">
                        <div method="POST" action="" id="recherchetrajet">
                           <legend>Rechercher un trajet :</legend>       
                           
                           <p>
                            <label htmlFor="villeDepartTrajet">Départ</label> :
                            <input type="text" placeholder="Ex : Lyon" name="villeDepartTrajet" id="villeDepartTrajet" required/>
                           
                            <label htmlFor="villeFinTrajet">jusqu'à</label> :
                            <input type="text" placeholder="Ex : Clermont Ferrand" name="villeFinTrajet" id="villeFinTrajet" required/>
                            
                            <a href={`/trajetpassager/${val.id}`}><button type="submit" className="btn boutton passager">GO</button></a>
                            </p>
                        </div>
                       
                    </div>
                </div>

    

    <div className="row">

{/* <!-- 1er bouton avec le popup qui affiche les messages et le formulaire d'envois d'un message --> */}
<div className="col-3 offset-4">
    <button className="test page" onClick={showModalOne}><img src={imageMessage} alt="img" id="espace_membre" /></button>
</div>                       
            
                
        <Modal show={isOpenOne} onHide={hideModalOne}>


        <Modal.Header>

        <h3>Liste des membres </h3>
        <button className="close" onClick={hideModalOne}>X</button>

        </Modal.Header>

        <Modal.Body>


            {/* <!-- Tableau des messages --> */}
            <table className="table table-bordered" id="listedesmembres">
                <thead>
                        <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Delannoy</td>
                        <td>Pierre</td>
                        <td>14/09/2021</td>
                        <td>Bonjour, tu vas bien?</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Delannoy</td>
                        <td>Pierre</td>
                        <td>14/09/2021</td>
                        <td>Coucou</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Delannoy</td>
                        <td>Pierre</td>
                        <td>14/09/2021</td>
                        <td>Holà</td>
                    </tr>
                        </tbody>
                      </table>

                      

                <form method="POST" action="" id="envoismessage">
                    <div className="col-1 offset-1">
                        <label for="nom">Nom</label>
                        <input type="text" placeholder="Ex : Huard" name="nom" id="nom" required/>

                        <label for="prenom">Prénom</label>
                        <input type="text" placeholder="Ex : Maxime" name="prenom" id="prenom" required/>
                    </div>
                    <div className="col-1 offset-1">
                        <label for="message">Message</label>
                        <input type="text" placeholder="Ex : Coucou" name="message" id="message" required/>
                    </div>
                    <div className="col-2 offset-8">
                        <button type="button" className="btn"><img src={imageEnvoi} id="messagenotif" alt="img"/></button>
                    </div>
              
                </form>

            </Modal.Body>




            </Modal>
           
       
    


    <div className="col-3 offset-1">
        <button className="test page"><img src={imageNotif} id="espace_membre" alt="img" /></button>
    </div>

    <div className="col-3 offset-4">
    <button className="test page"><img src={imageEvent} id="espace_membre" alt="img" /></button>
    </div>

    <div className="col-3 offset-1">
    <button className="test page"><img src={imageGestion} id="espace_membre" alt="img" /></button>
    </div>

</div>
</div>
</main>

        </div>
        })}</div>
    );
};

export default MembreConducteur;