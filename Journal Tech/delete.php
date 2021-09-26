<?php

    include "./connexion.php";
    
    $id = $_GET['id'];

    $execute=$db->exec("DELETE FROM article WHERE id = $id");
    //condition pour vérifier si l'article s'ajoute bien à la bdd
    if($execute){

        echo"Suppression OK !! <br>";
        
        
    
    } else {
        
        echo"Essaye encore<br>"; 
    }     
    echo'<a href= "./index.php">retourne à l\' acceuil</a>';



?>
