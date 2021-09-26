import React, {  useState, useEffect } from "react";
import '../App.css';
import Modal from "react-bootstrap/Modal";
import imageConducteur from "../img/logoconducteur.jpg";
import imageMessage from "../img/message.jpg";
import imageEnvoi from "../img/message-envoyé.jpg";
import imageNotif from "../img/notif.png";
import imageEvent from "../img/event.jpg";
import imageGestion from "../img/gestionprofil.jpg";
import Axios from 'axios'; //permet de faire des requetes asynchrones depuis le back



function MembrePassager() {

    let param = window.location.pathname;
    let idMembre = param.substr(16,17);
    let valide = 1;
    
    const [nom_ville_depart, setNomVille_depart] = useState("");
    const [nom_ville_fin, setNomVille_fin] = useState("");
    const [tarif_Co_Voit, setTarif_co_voit] = useState("");
    const [dateDepart, setDateDepart] = useState("");
    const [message, setMessage] = useState("");
    const [idVille, setIdVille] = useState("");
    const [idVilleDeux, setIdVilleDeux] = useState("");
    const [membre, setMembre] = useState([]);

    const [isOpenOne, setIsOpenOne] = React.useState(false);
    const [isOpenTwo, setIsOpenTwo] = React.useState(false);
    const [isOpenThree, setIsOpenThree] = React.useState(false);

    const showModalOne = () => {
  
        setIsOpenOne(true);
    
      };

    const showModalTwo = () => {
  
        setIsOpenTwo(true);
    
    };

    const showModalThree = () => {
  
        setIsOpenThree(true);
    
      };
    

    const hideModalOne = () => {
  
        setIsOpenOne(false);
    
      };

    const hideModalTwo = () => {
  
        setIsOpenTwo(false);
    
    };

    const hideModalThree = () => {
  
        setIsOpenThree(false);
    
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
              setMessage(response.data.erreur)  
            }else{
                setMessage(null)
                var data = response.data.message;
                var id = data.split(" ");               
                var idUn = id[0];
                var idDeux = id[1];
                setIdVille(idUn);
                setIdVilleDeux(idDeux);
                var btn = document.getElementById("buttonfunction");
                btn.click();
                var inputVilleDepart = document.getElementById("villeDepartTrajet");
                inputVilleDepart.value = "";
                var inputVilleFin = document.getElementById("villeFinTrajet");
                inputVilleFin.value = "";
                var inputTarif = document.getElementById("tarifParPersonnes");
                inputTarif.value = "";
                var inputDate = document.getElementById("dateTrajet");
                inputDate.value = "";
                

            }})           
    }

    const newTrajetPassager = () => {
        Axios.post("http://localhost:3001/newtrajetpassager", {
            num_passager: idMembre,
            num_ville_depart: idVille,
            num_ville_fin: idVilleDeux,
            tarif_Co_Voit: tarif_Co_Voit,
            dateDepart: dateDepart,
            trajetValide: valide})
    }
      
    return (
        <div>
            
            {membre.map((val) => {
                return  <div>
                     

    <main>
    <div className="container-fluid">
        <div className="row">
            <div className="col-2 offset-1">
                <p><a href={`/membreconducteur/${val.id}`}><img src={imageConducteur} id="espace_membre" alt="img"/></a></p>
            </div>

                    {/* <!-- Premier formulaire pour proposer un trajet --> */}



                    <div className="col-8 text-center">
                        <div className="form" id="trajetcovoit">
                        <legend>Proposer un trajet en tant que passager :</legend>

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

                            <button className="btn boutton passager" onClick={getVilles}>GO</button>
                            <button id="buttonfunction" onClick={newTrajetPassager} style={{visibility: "hidden"}}>GO</button>
                        </div>                         
                    </div>

                
                
            
            {/* <!-- Deuxième formulaire pour rechercher un trajet --> */}

            <div className="col-8 offset-3 text-center">
                        <div id="recherchetrajet">
                           <legend>Rechercher un trajet en tant que :</legend>       
                           
                           
                            <label htmlFor="villeDepartTrajet">Départ</label> :
                            <input type="text" placeholder="Ex : Lyon" name="villeDepartTrajet" id="villeDepartTrajet" required/>
                           
                            <label htmlFor="villeFinTrajet">jusqu'à</label> :
                            <input type="text" placeholder="Ex : Clermont Ferrand" name="villeFinTrajet" id="villeFinTrajet" required/>
                            
                            <a href={`/Trajetconducteur/${val.id}`}><button type="submit" className="btn boutton passager">GO</button></a>
                            
                 
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
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" placeholder="Ex : Huard" name="nom" id="nom" required/>
        
                                        <label htmlFor="prenom">Prénom</label>
                                        <input type="text" placeholder="Ex : Maxime" name="prenom" id="prenom" required/>
                                    </div>
                                    <div className="col-1 offset-1">
                                        <label htmlFor="message">Message</label>
                                        <input type="text" placeholder="Ex : Coucou" name="message" id="message" required/>
                                    </div>
                                    <div className="col-2 offset-8">
                                        <button type="button" className="btn"><img src={imageEnvoi} id="messagenotif" alt="img"/></button>
                                    </div>
                              
                                </form>

                            </Modal.Body>


    
    
                            </Modal>
                           
                       
                    
               
        
                    <div className="col-3 offset-1">
                        <button className="test page" onClick={showModalTwo}><img src={imageNotif} id="espace_membre" alt="img" /></button>
                    </div>

                    <Modal show={isOpenTwo} onHide={hideModalTwo}>


                        <Modal.Header>

                        <h3>Notifications </h3>
                        <button className="close" onClick={hideModalTwo}>X</button>

                        </Modal.Header>

                        <Modal.Body>
                            <p>03/08/2021 - Votre trajet à bien été enregistré ! </p>
                        </Modal.Body>

                            </Modal>


        
                    <div className="col-3 offset-4">
                    <button className="test page" onClick={showModalThree}><img src={imageEvent} id="espace_membre" alt="img" /></button>
                    </div>

                    <Modal show={isOpenThree} onHide={hideModalThree}>


                        <Modal.Header>

                        <h3>Evenements </h3>
                        <button className="close" onClick={hideModalThree}>X</button>

                        </Modal.Header>

                        <Modal.Body>
                            <p>Match PSG - FC Pouzolles Street</p>
                            <p>Le 18/11/2021</p>
                            <p>10€ par personnes</p>
                            <p>20 places restantes !</p>
                        </Modal.Body>

                            </Modal>
                    
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


export default MembrePassager;