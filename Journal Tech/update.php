<?php

include "./connexion.php";
include "./editform.php";
    
$Id = $_GET['id'];
$titre = $_GET['titre'];
$image = $_GET['image'];
$contenu = $_GET['contenu'];
$auteur = $_GET['auteur'];
$categorie = $_GET['categorie'];
$dates = $_GET['dates'];

    $execute=$db->exec("UPDATE article SET titre=$titre, images=$image, paragraphe=$contenu, auteur=$auteur, dates=$dates, id_categorie=$categorie 
    WHERE id=$Id");
    //condition pour vérifier si l'article s'ajoute bien à la bdd
    if($execute){

        echo"Modification OK !! <br>";      
    
    } else {
        
        echo"Essaye encore<br>"; 
    }     
    echo'<a href= "./index.php">retourne à l\' acceuil</a>';



?>