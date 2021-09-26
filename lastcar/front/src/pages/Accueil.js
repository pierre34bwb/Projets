import React from "react";
import imgAccueil from "../img/img-accueil.jpeg";

const Acceuil = () => {
    return (
        <div>
            
            <main>
    <div className="container-fluid">
    <div className="row">
        <div className="col-4 offset-2" id="texte">
            <p>
                Et si conduire vous faisait faire des économies ?

                Devenez conducteur Last Car et faites des économies sur chacun de vos trajets en partageant les frais avec vos passagers.
            </p>
        </div>
        
        <div className="col-4" id="image">
            <p><img src={imgAccueil} alt={"imgaccueil"}/></p>
        </div>
    </div>
    </div>
</main>


        </div>
    );
};

export default Acceuil;