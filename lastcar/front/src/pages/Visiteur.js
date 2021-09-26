import React from "react";
import Modal from "react-bootstrap/Modal";
import membre from "../img/listemembrevisiteur.jpg";
import trajet from "../img/listetrajetvisiteur.jpg";
import contact from "../img/contactadmin.jpg";


function Visiteur(){

    
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


    return (

        <div>

<main>
     <div class="container-fluid">
         <div class="row">
             <div class="col-7 offset-3">
             <p class="text-danger">En tant que visiteur, vous n'avez pas accès à la totalité de l'application.
                 Vous ne pouvez seulement: afficher et contacter les membres qui ont rendu leurs données publiques,
                 afficher la liste des trajets et contacter l'admin.
             </p>
             </div>
         </div>

         <div class="row">

          <div className="col-3 offset-2" >           
            <button className="test" onClick={showModalOne}><img src={membre} id="listemembrevisiteur" alt="img"/></button>
          </div>
    

          <Modal show={isOpenOne} onHide={hideModalOne}>
    
            <Modal.Header>

            <h3>Liste des membres </h3>
            <button className="close" onClick={hideModalOne}>X</button>
    
            </Modal.Header>
    
            <Modal.Body>

            
                           <p>Didier Robert - Citadine - 06 00 00 00 00 - didier@email.fr</p>
                           
                           <p>Jean Hubert - Berline - 06 00 00 00 00 - jeanhub@email.fr</p>
                            
                           <p>Pierre Ouk - SUV - 06 00 00 00 00 - pierre@email.fr</p>
                            
            </Modal.Body>


    
    
          </Modal>

          <div className="col-3" >           
            <button className="test" onClick={showModalTwo}><img src={trajet} id="listemembrevisiteur" alt="img"/></button>
          </div>
    

          <Modal show={isOpenTwo} onHide={hideModalTwo}>
    
            <Modal.Header>

            <h3>Liste des trajets </h3>
            <button className="close" onClick={hideModalTwo}>X</button>
    
            </Modal.Header>
    
            <Modal.Body>

            
                            <p>Paris - Brest, 30€, 20/09/2021</p>
                            
                            <p>Paris - Brest, 30€, 20/09/2021</p>
                            
                            <p>Paris - Brest, 30€, 20/09/2021</p>

                            
            </Modal.Body>


    
    
          </Modal>

          <div className="col-3" >           
            <button className="test" onClick={showModalThree}><img src={contact} id="listemembrevisiteur" alt="img"/></button>
          </div>
    

          <Modal show={isOpenThree} onHide={hideModalThree}>
    
            <Modal.Header>

            <h3>Contact Admin</h3>
            <button className="close" onClick={hideModalThree}>X</button>
    
            </Modal.Header>
    
            <Modal.Body>

            
                            <p>Téléphone : 07 07 07 07 07</p>
                            
                            <p>Fax : 08 00 00 00 00</p>
                            
                            <p>Mail : admin@mail.fr</p>

                            
            </Modal.Body>


    
    
          </Modal>

          
</div>
          </div>
    </main>
          </div>
    
      );
    
    };








export default Visiteur;