import React, { useState } from "react";
import Axios from 'axios'; //permet de faire des requetes asynchrones depuis le back

//je crée l'objet inscription
function Inscription(){

    //utilisation d'un hook, je declare un état et une fonction qui permet de mettre à jour cet état
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [ddn, setDdn] = useState("");
    const [mail, setMail] = useState("");
    const [status, setStatus] = useState("visiteur"); //je crée une valeur en dur pour pouvoir l'asscocié et l'enregistrer dans un champ caché d'un formulaire
    const [password, setPassword] = useState("");
  
    //permet de prendre un argument comme valeur initiale et de renvoyer à la place un objet comme référence
    const ref = React.useRef();
  
    //j'appelle inscription au clic du bouton, et axios va chercher la méthode en utilisant l'url qui est indiqué
    const inscription = () => {
      Axios.post("http://localhost:3001/inscription", {
        lastName: lastName, //l'attribut de la table membre  recupere la valeur stockée dans l'état 
        firstName: firstName, 
        adresse: adresse, 
        telephone: telephone, 
        ddn: ddn, 
        mail: mail, 
        status: status, 
        password: password})
    }
  
    return (
      <div className="App">
  
        <main>
    <div className="container-fluid">
        <div className="row">
          <div className = "col-lg-6 offset-3 text-center" id="inscription">
             <form method="POST" action="" id="inscription">
                <legend>Inscription</legend>       
                
                <p>
                 <label htmlFor="lastName">Nom</label> :
                 <input type="text" name="lastName" id="lastName" placeholder="Ex : Belmondo"
                  onChange={(e) => { setLastName(e.target.value);}} required/> 
                                    {/* la fonction setLastName récupere en parametre la valeur rentrée dans l'input */}
                </p>

                <p>
                 <label htmlFor="firstName">Prénom</label> :
                 <input type="text" name="firstName" id="firstName" placeholder="Ex : Jean-Paul"
                  onChange={(e) => { setFirstName(e.target.value);}} required/>
                </p>

                <p>
                    <label htmlFor="adresse">Adresse</label> :
                    <input type="text" name="adresse" id="adresse" placeholder="Ex : 5 Rue du bananier"
                  onChange={(e) => { setAdresse(e.target.value);}} required/>
                </p>

                <p>
                    <label htmlFor="telephone">Téléphone</label> :
                    <input type="text" name="telephone" id="telephone" placeholder="Ex : 06 06 06 06 06"
                  onChange={(e) => { setTelephone(e.target.value);}} required/>
                   </p>

                <p>
                    <label htmlFor="ddn">Date de naissance</label> :
                    <input type="date" name="ddn" id="ddn" placeholder="Ex : 09/04/1933"
                  onChange={(e) => { setDdn(e.target.value);}} required/>
                </p>

                <p>
                    <label htmlFor="mail">Email</label> :
                    <input type="text" name="mail" id="mail" placeholder="Ex : bebel@gmail.com"
                  onChange={(e) => { setMail(e.target.value);}} required/>
                </p>

                
                    
                    <input type="hidden" name="status" id="status" value={status} ref={ref} 
                  onChange={(e) => { setStatus(e.target.value);}} required/>
                

                <p>
                    <label for="mdp">Mot de passe</label> :
                    <input type="password" name="password" id="mdp" placeholder="Ex : *******"
                  onChange={(e) => { setPassword(e.target.value);}}  required/>
                </p>

                
                    <p><button type="button" className="btn boutton" onClick={inscription}>Envoyer</button></p>
                                                                    {/* permet de lancer la const inscription au clic */}
             </form>
           </div>
        </div>
    </div>

</main>

  
      </div>
    );
  }

//j'exporte l'objet inscription vers le fichier app.js
export default Inscription;