import React, {useState, useEffect } from "react";
import '../App.css';
import imagePassager from "../img/passager.png";
import imageMonsieur from "../img/monsieur.jpg";
import imgageKevin from "../img/kevin.jpg";
import Axios from 'axios'; //permet de faire des requetes asynchrones depuis le back

function TrajetConducteur(){

  let param = window.location.pathname; //je recupere le parametre de l'url
  let idMembre = param.substr(18,20); //je recupere les valeurs de param et je trie de maniere à garder l'id du membre 

  const [ trajetConducteur, setTrajetConducteur ] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/tajetspassager').then((response) => {
      setTrajetConducteur(response.data);
    })
  }, [])
    
    return (

      <div>

                
                <main>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-2 offset-1">
                        <p><a href={`/trajetpassager/${idMembre}`}><img src={imagePassager} id="espace_membre" alt="img" /></a></p>
                      </div>

                      <div className="col-7 offset-1 text-center">
                        <form method="POST" action="" id="recherchetrajet">
                          <legend>Rechercher un trajet :</legend>

                          <p>
                            <label for="villeDepartTrajet">Départ</label> :
                            <input type="text" placeholder="Ex : Lyon" name="villeDepartTrajet" id="villeDepartTrajet" required />

                            <label for="villeFinTrajet">jusqu'à</label> :
                            <input type="text" placeholder="Ex : Clermont Ferrand" name="villeFinTrajet" id="villeFinTrajet" required />

                            <button type="submit" className="btn boutton passager">GO</button>
                          </p>

                        </form>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-9 offset-2">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" aria-label="Slide 15"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15" aria-label="Slide 16"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="16" aria-label="Slide 17"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="17" aria-label="Slide 18"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="18" aria-label="Slide 19"></button>
                          </div>
                          <div className="carousel-inner">

                            {/* <!-- Début du 1er carousel --> */}
                            <div className="carousel-item active">
                            
                              <div className="row" id="profil-carousel">
                                <div className="col-3">
                                  <p>Ville de départ - ville d'arrivée</p>
                                  <p>Tarif</p>
                                  <p>date du trajet</p>
                                </div>

                                <div className="col-4 offset-2">
                                  <p>Prénom de la personne</p>
                                  <p>Télephone</p>
                                  <p>Note moyenne 4.5/5 <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></p>
                                </div>

                                <div className="col-1">
                                  <img src={imgageKevin} id="Edmond" alt="img" />
                                </div>


                                
                              </div>
                              
                            </div>
                            {/* <!-- Fin du 1er carousel --> */}

                            {/* <!-- Début du 2ème carousel --> */}
                            {trajetConducteur.map((val) => {   
                            return <div className="carousel-item">
                              <div className="row" id="profil-carousel">
                                <div className="col-3">
                                <p>{val.ville1} - {val.ville2}</p>
                                  <p>{val.tarif_covoit} euros</p>
                                  <p>Pour le {val.dateTrajet}</p>
                                </div>

                                <div className="col-4 offset-2">
                                  <p>{val.prenom} - {val.nom}</p>
                                  <p>{val.telephone}</p>
                                  <p>Note moyenne 3/5 <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                                </div>

                                <div className="col-1">
                                  <img src={imageMonsieur} id="Edmond" alt="img" />
                                </div>
                               
                              </div>
                            </div>
                            

                          })}
                          </div>  {/* <!-- Fin du 2ème carousel --> */}
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>




                
    </div>






    )


}

export default TrajetConducteur;