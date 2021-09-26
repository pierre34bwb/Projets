<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="template/style.css">
    <title>Modifier un article</title>
</head>
<body>

<main class="container-fluid">

<div class="form-row mt-5 col-8 py-4 text-center mx-auto">
    
<?php

include "./connexion.php";
include "./publier.php";
$Idart = $_GET['idart'];

// if (isset($_POST['submit'])){
// $Idart = $_GET['idart'];
// $titre = $_POST['titre'];
// $image = $_POST['images'];
// $contenu = $_POST['paragraphe'];
// $auteur = $_POST['auteur'];
// $dates = $_POST['dates'];
// $categorie = $_POST['id_categorie'];

// }

// $result = $db->query($infos);
include "./editform.php";
$infos = $db->query("SELECT * FROM article WHERE id=$Idart");
while ($row = $infos->fetch()) {
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
    echo $row['id']."<br />\n";
    echo $row['titre']."<br />\n";
    echo $row['image']."<br />\n";
    echo $row['contenu']."<br />\n";
    echo $row['auteur']."<br />\n";
    echo $row['categorie']."<br />\n";
    echo $row['dates']."<br />\n";

}

foreach($infos as $article){
   
    $Idart = $article[0];
    $Titre = $article[1];
    $Image = $article[2];
    $Contenu = $article[3];
    $Auteur = $article[4];
    $Dates = $article[5];
    $Categorie = $article[6];

}


//echo "<input type=\"text\" id=\"id\"  placeholder=\"Titre\" pattern=\"[a-zA-Z]{1-10}\" required>";
//echo $result[2];


// $soumettre = "UPDATE article SET titre='$titre', images='$image', paragraphe='$contenu', auteur='$auteur', dates='$dates', id_categorie='$categorie' 
// WHERE id=$Idart";
// var_dump($soumettre);
// $resultup = $db->query($soumettre);
       
//         if ($resultup)
//         {
//             echo "success";
//         }
//         else
//         {
//             echo "fatal error";
//         };
//     };

        
// echo "$titre </br>";
// echo "$image </br>";
// echo "$contenu </br>";
// echo "$auteur </br>";
// echo "$dates </br>";
// echo "$categorie </br>";

// Class Form{
//     public $HTML;
//     public $element;
//     public $texte;
//     public $image;
//     public $textarea;
//     public $auteur;
//     public $categorie;
//     public $date;
//     public $checkbox;
//     public $submit;

//     public function __construct($action, $method = "POST") {

//         $this->element = "<form class= \"needs-validation\" novalidate action=\"$action\" method=\"$method\">";

//     }

//     public function setText($nom, $titre, $label, $method = "POST") {
        
//         $this->texte = "$label<br><input type =\"text\" id=\"titre\" name =\"$nom\" placeholder=\"Titre\" value=\"$titre\" pattern=\"[a-zA-Z]{1-10}\" required><br><div class=\"invalid-feedback\">Veuillez ajouter un titre pour votre article !</div>";

//     }

    
//     public function setImage($nom, $image, $label, $method = "POST") {

//         $this->image = "$label<br><input type=\"url\" id=\"images\" name =\"$nom\" placeholder=\"Url de l'image\" value=\"$image\" required><br><div class=\"invalid-feedback\">Veuillez ajouter une image valide!</div>";
//     }

    
//     public function setTextarea($nom, $contenu, $method = "POST") {

//         $this->textarea = "Le contenu de votre article :<br><textarea id=\"contenu\" name=\"$nom\" pattern=\"[a-zA-ZÀ-ÿ]\" required>$contenu</textarea><br><div class=\"invalid-feedback\">Veuillez ajouter du contenu !</div>";
//     }

    
//     public function setAuteur($nom, $auteur, $label, $method = "POST") {
        
//         $this->auteur = "$label<br><input type =\"text\" id=\"auteur\" name =\"$nom\" placeholder=\"Nom d'auteur\" value=\"$auteur\" pattern=\"[a-zA-Z]{1-10}\" required><br><div class=\"invalid-feedback\">Choississez un nom d'auteur valide.</div>";

//     }
    
    
//     public function setCategorie($nom, $categorie, $label, $method = "POST") {
        
//         $this->categorie = "$label<br><input type =\"text\" id=\"categorie\" name =\"$nom\" value=\"$categorie\" placeholder=\"JS ? CSS? PHP?\" pattern=\"JS|CSS|PHP\" required><br><div class=\"invalid-feedback\">Choississez une catégorie entre JS, CSS et PHP.</div>";

//     }

    
//     public function setDate($nom, $dates, $label, $method = "POST") {

//         $this->date = "$label<br><input type=\"date\" id=\"date\" name =\"$nom\" value=\"$dates\" required><br><div class=\"invalid-feedback\">Choississez une date valide.</div>";
//     }

    
    
//     public function setCheckbox($nom, $label) {
        
//         $this->checkbox = "<div class=\"form-group\">$label<br><input form-check-input type=\"checkbox\" name=\"$nom\" required><p>Êtes-vous d'accord avec les termes et les conditions d'utilisation?<p><div class=\"invalid-feedback\">Vous devez accepter avant de soumettre.</div></div>";
//     }

    
//     public function setSubmit($soumettre) {

//         $this->submit .= "<br><button class=\"btn btn-primary btn-sm text-decoration-none col-4 mt-3\"><a $soumettre>Soumettre</a></button><br>";
//     }

//     public function getForm() {

//         $this->HTML ="";
//         $this->HTML .= $this->element;
//         $this->HTML .= $this->texte;
//         $this->HTML .= $this->image;
//         $this->HTML .= $this->textarea;
//         $this->HTML .= $this->auteur;
//         $this->HTML .= $this->categorie;
//         $this->HTML .= $this->date;
//         $this->HTML .= $this->checkbox;
//         $this->HTML .= $this->submit;
//         $this->HTML .= "</form>";

//         echo $this->HTML;
//     }
// }


// $myForm = new Form("edit.php", "C'est un test ma couille");
// $myForm->setText("titre", "$titre", "Le titre :");
// $myForm->setImage("image", "$image", "Ajouter une image :");
// $myForm->setTextarea("contenu", "$contenu");
// $myForm->setAuteur("auteur", "$auteur", "Votre nom d'auteur :");
// $myForm->setCategorie("categorie", "$categorie", "A quelle catégorie appartient-il?");
// $myForm->setDate("dates", "$dates", "Ajouter une date :");
// $myForm->setCheckbox("", "");
// $myForm->setSubmit("$soumettre");
// $myForm->getForm();

// echo "<br><a href=\"publier.php\">Retour au formulaire</a>";
// echo "</main>";
// include "./template/footer.php";

?>