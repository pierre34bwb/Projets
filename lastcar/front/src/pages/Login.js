import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';
import Axios from 'axios';  //permet de faire des requetes asynchrones depuis le back



//je crée l'objet Login
function Login() {
  
    const history = useHistory();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [statusMessage, setStatusLogin] = useState("");

    const login = (id) => {  
        Axios.post("http://localhost:3001/login", {
          mail: mail, 
          password: password,
        }).then((response) => {
          
          if (response.data.message){
            setStatusLogin(response.data.message)  //si identifiant incorrect envoie message d'erreur sur la page login
          }else{
            var status = response.data[0].status
            setStatusLogin(response.data[0].status)//si identifiant correct renvoi le statut et le stocke dans une variable
            id = response.data[0].id

            if(status === "admin"){      //renvoie sur la page admin, membre, ou visiteur suivant le statut
              history.push(`/admin/${id}`); 
              
            }else if(status === "visiteur"){
              history.push(`/visiteur/${id}`);
            }else{
              history.push(`/membrepassager/${id}`);
              
              
              return id
            }
          }
        })
  
      };


    return (
        <div>
          
<div className="container-fluid">
  <main>
    <div className="row">
      <div className = "col-lg-6 offset-3 text-center" id="connexion">
      <div className="form" id="connexion">
            <legend>Connexion</legend>       
            
            <p>
             <label htmlFor="mail">Email :</label>
             <input type="text" name="mail" id="mail" placeholder="Ex : test@gmail.com"
              onChange={(e) => { setMail(e.target.value);}}/>
            </p>

            <p>
             <label htmlFor="mdp">Mot de passe :</label>
             <input type="password" name="password" id="mdp" placeholder="Ex : *******"
              onChange={(e) => { setPassword(e.target.value);}}/>
            </p>
      
            <p>
             <button className="btn boutton" onClick={login}>Envoyer</button>
             </p> 
             <h6>{statusMessage}</h6>
            
       </div>
    </div>
</div>

</main>                            
                  
                  
                  </div>
        </div>
    );
};


export default Login;
