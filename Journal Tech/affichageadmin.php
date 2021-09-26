<?php

include "./connexion.php";

$sqlRead = "SELECT `id`, `titre`, `images`, `paragraphe`, `auteur`, `dates`, `id_categorie` FROM `article` ORDER BY `id`";

$result = $db->query($sqlRead);

foreach($result as $key=>$article){
   
    $Idart = $article[0];
    $Titre = $article[1];
    $Image = $article[2];
    $Contenu = $article[3];
    $Auteur = $article[4];
    $Dates = $article[5];
    $Categorie = $article[6];
    $modifier = "href='edit.php?idart=$Idart'";
    $supprimer = "href='delete.php?idart=$Idart'";
    

    if($Categorie == 1){

        $Categorie = 'JS';

    } else if($Categorie == 2){

        $Categorie = 'PHP';

    }else if($Categorie == 3){

        $Categorie = 'CSS';
    }

    $myIndex = new Index();  


    if ($key %3 == 0){
        echo "</div>";
        $myIndex->setRow();
        }

    $myIndex->setArticle();
    $myIndex->setTitre($Idart);
    $myIndex->setTitre($Titre);
    $myIndex->setImage($Image);
    $myIndex->setTexte($Contenu);
    $myIndex->setCategorie($Categorie);
    $myIndex->setAuteurDate($Auteur, $Dates);
    $myIndex->setModifier($modifier);
    $myIndex->setSupprimer($supprimer);

    $myIndex->getIndex();

    }
  
?>