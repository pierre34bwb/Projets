import React from "react";


const Footer = () => {
    return (
        <div>

<footer className="container-fluid">
    <div className="row">
        <div className="text-center">
            <p>Suivez-nous sur les réseaux sociaux :</p>
            <a href={"https://fr-fr.facebook.com/"} className="fab fa-facebook"><h6 className="para">a</h6></a>
            <a href={"https://twitter.com/login?lang=fr"} className="fab fa-twitter"><h6 className="para">a</h6></a>
            <a href={"https://www.instagram.com/?hl=fr"} className="fab fa-instagram"><h6 className="para">a</h6></a>
            <a href={"https://play.google.com/store?gl=FR"} className="fab fa-google-play"><h6 className="para">a</h6></a>
            <p>© 2021 Last Car by Delannoy Pierre et Huard Maxime</p>
        </div>
    </div>
</footer>


        </div>
    );
};

export default Footer;