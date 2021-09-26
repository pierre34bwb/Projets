import React from "react";
import logo from "../img/lastcar-logo.jpg"

const HeaderConnect = () => {
    return (
        <div>

<header className="container-fluid">
    <div className="row">
        <div className="col-12">
            <div className="col-2 offset-10">
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                      Menu
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><a href="http://localhost:3000/login"><button className="dropdown-item" type="button" >Deconnexion</button></a></li>
                    </ul>
                  </div>
            </div>
            <div className="col-2 offset-1">
                <p><a href="http://localhost:3000/"><img src={logo} style={{height: "200px"}} alt={"logo"}/></a></p>
            </div>
        </div>
    </div>
</header>

        </div>
    );
};

export default HeaderConnect;
