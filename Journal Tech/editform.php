<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="template/style.css">
    <title>Formulaire</title>
</head>
<body>

<main class="container-fluid">

<div class="form-row mt-5 col-8 py-4 text-center mx-auto">
    
<?php
// include "./template/header.php";
include "./connexion.php";

Class EditForm{
    public $HTML;
    public $element;
    public $id;
    public $texte;
    public $image;
    public $textarea;
    public $auteur;
    public $categorie;
    public $date;
    public $checkbox;
    public $submit;
    
    
    public function __construct($action, $titre, $method = "POST") {

        $this->element = "<form class= \"needs-validation\" novalidate action=\"$action\" method=\"$method\">";

    }

    public function setId(){

        $this->id = $id;
    }
    
    public function setText($nom, $label, $method = "POST") {
        
        $this->texte = "$label<br><input type =\"text\" id=\"titre\" name =\"$nom\" value =\"$titre\" placeholder=\"Titre\" pattern=\"[a-zA-Z]{1-10}\" required><br><div class=\"invalid-feedback\">Veuillez ajouter un titre pour votre article !</div>";

    }

    
    public function setImage($nom, $label, $method = "POST") {

        $this->image = "$label<br><input type=\"url\" id=\"images\" value =\"$image\" name =\"$nom\" placeholder=\"Url de l'image\" required><br><div class=\"invalid-feedback\">Veuillez ajouter une image valide!</div>";
    }

    
    public function  setTextarea($nom, $method = "POST") {

        $this->textarea = "Le contenu de votre article :<br><textarea id=\"paragraphe\" name=\"$nom\" value =\"$contenu\" pattern=\"[a-zA-ZÀ-ÿ]\" required></textarea><br><div class=\"invalid-feedback\">Veuillez ajouter du contenu !</div>";
    }

    
    public function setAuteur($nom, $label, $method = "POST") {
        
        $this->auteur = "$label<br><input type =\"text\" id=\"auteur\" name =\"$nom\" value =\"$auteur\" placeholder =\"Nom d'auteur\" pattern=\"[a-zA-Z]{1-10}\" required><br><div class=\"invalid-feedback\">Choississez un nom d'auteur valide.</div>";

    }
    
    
    public function setCategorie($nom, $label, $method = "POST") {
        
        $this->categorie = "$label<br><input type =\"text\" id=\"categorie\" name =\"$nom\" value =\"$categorie\" placeholder =\"JS ? CSS? PHP?\" pattern=\"JS|CSS|PHP\" required><br><div class=\"invalid-feedback\">Choississez une catégorie entre JS, CSS et PHP.</div>";

    }

    
    public function setDate($nom, $label, $method = "POST") {

        $this->date = "$label<br><input type =\"date\" id=\"date\" name =\"$nom\" value =\"$dates\" required><br><div class=\"invalid-feedback\">Choississez une date valide.</div>";
    }

    
    
    public function setCheckbox($nom, $label) {
        
        $this->checkbox = "<div class=\"form-group\">$label<br><input form-check-input type =\"checkbox\" name=\"$nom\" required><p>Êtes-vous d'accord avec les termes et les conditions d'utilisation?<p><div class=\"invalid-feedback\">Vous devez accepter avant de soumettre.</div></div>";
    }

    
    public function setSubmit($nom, $envois = "Soumettre") {

        $this->submit .= "<br><input type=\"submit\" class=\"btn btn-primary \" name=\"$nom\" value=\"$envois\"><br>";
    }

    public function getForm() {

        $this->HTML ="";
        $this->HTML .= $this->element;
        $this->HTML .= $this->texte;
        $this->HTML .= $this->image;
        $this->HTML .= $this->textarea;
        $this->HTML .= $this->auteur;
        $this->HTML .= $this->categorie;
        $this->HTML .= $this->date;
        $this->HTML .= $this->checkbox;
        $this->HTML .= $this->submit;
        $this->HTML .= "</form>";

        echo $this->HTML;
    }
}

$myForm = new EditForm("update.php", "C'est un test ma couille");
$myForm->setText("titre", "$titre", "Le titre :");
$myForm->setImage("images", $image, "Ajouter une image :");
$myForm->setTextarea("paragraphe", $contenu);
$myForm->setAuteur("auteur", $auteur, "Votre nom d'auteur :");
$myForm->setCategorie("categorie", $categorie, "A quelle catégorie appartient-il?");
$myForm->setDate("dates", $dates, "Ajouter une date :");
$myForm->setCheckbox("", "");
$myForm->setSubmit("submit");
$myForm->getForm();

?>
      
    </div>

</main>

<?php

include "./template/footer.php";

?>