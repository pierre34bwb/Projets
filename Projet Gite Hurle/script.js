
// début de la fonctionnalité pour modifier les services (chambre / appartement)
// objectif modifier le titre,l'image,le paragraphe d'explication et les info tel que
// le prix et le nombre d'espace dispo

var serviceID;

// fonction qui permet de lancer la modification
function modifierService(){
    // récupérer les objects que l'on va modifier 
    var titreService = document.querySelector("#Service" + serviceID);
    var paraService = document.querySelector("#infoSercice" + serviceID);
    var infoService = document.querySelector("#infoService" + serviceID);
    var img = document.querySelector("#imgService" + serviceID);


    // récupérer les donners qui vont modifier les objects
    var newTitreService = document.querySelector("#TitreService").value;
    var src = document.querySelector("#imgService").value;
    var newParaService = document.querySelector("#paragrapheService").value;
    var newEspace = document.querySelector("#nbrEspace").value;
    var newPrix = document.querySelector("#prix").value;


    // modifie la source
    src = document.querySelector("#imgService").value;
    img.src = src;

    // modifie le titre
    newTitreService = document.querySelector("#TitreService").value;
    titreService.innerHTML = newTitreService;

    //modifie le paragraphe d'explication
    newParaService = document.querySelector("#paragrapheService").value;
    paraService.innerHTML = newParaService;
    
    // condition pour modifier les objects avec un id de 1 ou 2
    if(serviceID == 1 || serviceID == 2){
        // modifie les infos prix et espace 
        infoService.innerHTML = `Espaces restant ${newEspace}/${newEspace} à ${newPrix}€/nuits`
    }else if (serviceID == 3){
        // modifie les infos prix et espace
        infoService.innerHTML = `Appartements restant ${newEspace}/${newEspace} à ${newPrix}€/nuits`
    }

    // permet d'enlever la popupService
    var popupService = document.querySelector(".contenus");
    popupService.classList.remove("montrer")
    popupService.classList.add("cacher");


    newTitreService = document.querySelector("#TitreService").value = "";
    src = document.querySelector("#imgService").value = "";
    newParaService = document.querySelector("#paragrapheService").value = "";
    newEspace = document.querySelector("#nbrEspace").value = "";
    newPrix = document.querySelector("#prix").value = "";
}

// function qui permet d'afficher la popupService avec le formulaire
function afficherFormModifierService(id){
    serviceID = id;

    var popupService = document.querySelector(".contenus");
    popupService.classList.remove("cacher")
    popupService.classList.add("montrer");
}

// function qui permet de cacher la popupService si la personne veut anuler
function cacherFormModifierService(){
    var popupService = document.querySelector(".contenus");
    popupService.classList.add("cacher");
}

// fin fonctionnalité pour modifier les services 


// début de la fonctionnalité qui permet de cliquer sur un bouton et de créer une nouvel formule

var formuleID = 3;

function addFormule(){
    
    formuleID++;

    var main = document.querySelector("main")
    
    var divContenaire = document.createElement("div")
   
    var divFormule = document.createElement("div")
    var divContImg = document.createElement("div")
    var img = document.createElement("img")

    var divBareSepa2 = document.createElement("div")
    var imgBareSepa2 = document.createElement("img")

    var divColFormule = document.createElement("div")
    var divTitreFormule = document.createElement("div")
    var divParaFormule = document.createElement("div")

    var divRowBTN = document.createElement("div")
    var divCol1BTN = document.createElement("div")
    var divCol2BTN = document.createElement("div")
    var btn1 = document.createElement("button")
    var btn2 = document.createElement("button") 

    main.appendChild(divContenaire)
    divContenaire.setAttribute("class", `col-8 offset-2 mainAllService${formuleID}`)
    
    divContenaire.appendChild(divFormule)
    divFormule.setAttribute("class", "service row style")
    divFormule.setAttribute("id" ,`Formule${formuleID}`)
    
    divFormule.appendChild(divContImg)
    divContImg.setAttribute("class", "col-4")
    divContImg.appendChild(img)
    img.setAttribute("class", "imgFormuleStyle")
    img.setAttribute("id", `imgFormule${formuleID}`)

    divFormule.appendChild(divBareSepa2)
    divBareSepa2.appendChild(imgBareSepa2)
    divBareSepa2.setAttribute("class", "col")
    imgBareSepa2.setAttribute("class", "bareSepa2")
    imgBareSepa2.setAttribute("src", "/img/bareSepa2.svg")
    

    divFormule.appendChild(divColFormule)
    divColFormule.setAttribute("class", "col")

    divColFormule.appendChild(divTitreFormule)
    divTitreFormule.setAttribute("class", "row Formule FinitionTP")
    divTitreFormule.setAttribute("id", `titreFormule${formuleID}`)

    divColFormule.appendChild(divParaFormule)
    divParaFormule.setAttribute("class", "row paraService FinitionTP")
    divParaFormule.setAttribute("id", `infoFormule${formuleID}`)

    divColFormule.appendChild(divRowBTN)
    divRowBTN.setAttribute("class", "row")
    divRowBTN.appendChild(divCol1BTN)
    divCol1BTN.setAttribute("class", "col-4")
    divCol1BTN.appendChild(btn1)
    btn1.setAttribute("class", "btnAdminStyle")
    btn1.setAttribute("onclick", `afficherFormModifierFormule(${formuleID})`)
    btn1.innerHTML = "Modifier"
    divRowBTN.appendChild(divCol2BTN)
    divCol2BTN.setAttribute("class", "col-4")
    divCol2BTN.appendChild(btn2)
    btn2.setAttribute("class", "btnAdminStyle")
    btn2.setAttribute("onclick", `suppFormule(${formuleID})`)
    btn2.innerHTML = "Supprimer"

}

// fin de la fonctionnalité qui permet de cliquer sur un bouton et de créer une nouvel formule

// début de la fonctionnalité pour modifier les formules

function modifierFormule(){
    // récupérer les objects que l'on va modifier 
    var titreFormule = document.querySelector("#titreFormule" + formuleID);
    var paraFormule = document.querySelector("#infoFormule" + formuleID);
    var img = document.querySelector("#imgFormule" + formuleID);


    // récupérer les donners qui vont modifier les objects
    var newTitreFormule = document.querySelector("#TitreFormule").value;
    var src = document.querySelector("#imgFormule").value;
    var newParaFormule = document.querySelector("#paragrapheFormule").value;


    // modifie la source
    src = document.querySelector("#imgFormule").value;
    img.src = src;

    // modifie le titre
    newTitreFormule = document.querySelector("#TitreFormule").value;
    titreFormule.innerHTML = newTitreFormule;

    //modifie le paragraphe d'explication
    newParaFormule = document.querySelector("#paragrapheFormule").value;
    paraFormule.innerHTML = newParaFormule;
    

    // permet d'enlever la popupFormule
    var popupFormule = document.querySelector(".contenus");
    popupFormule.classList.remove("montrer")
    popupFormule.classList.add("cacher");


    newTitreFormule = document.querySelector("#TitreFormule").value = "";
    src = document.querySelector("#imgFormule").value = "";
    newParaFormule = document.querySelector("#paragrapheFormule").value = "";
}

// function qui permet d'afficher la popupFormule avec le formulaire
function afficherFormModifierFormule(id){
    formuleID = id;

    var popupFormule = document.querySelector(".contenus");
    popupFormule.classList.remove("cacher")
    popupFormule.classList.add("montrer");
}

// function qui permet de cacher la popupFormule si la personne veut anuler
function cacherFormModifierFormule(){
    var popupFormule = document.querySelector(".contenus");
    popupFormule.classList.add("cacher");
}
// fin fonctionnalité pour modifier les formules


// début fontionnalité pour supprimer une formule 
function suppFormule(id){
    formuleID = id
    var main = document.querySelector("main")
    var divContSupp = document.querySelector(`.mainAllService${formuleID}`)

    var result = confirm("Etes-vous sûr de vouloir supprimer la formule");
    if (result == true){
        main.removeChild(divContSupp)
        formuleID--;
    }
}
// fin fontionnalité pour supprimer une formule 


// début fonctionalité pour voir les demandes et accpeter ou refuser une reservation

