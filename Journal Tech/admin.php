<?php

include "./template/header.php";

class Index{

    public $HTML;
    public $article; /* La structure de l'article avec Boostrap */
    public $titre; /* Le titre de l'article */
    public $image; /*Les images contenues dans les articles*/
    public $texte; /* Le texte contenu dans l'article */
    public $categorie; /*CSS, JS ou PHP*/
    public $auteur; /* Le nom de l'auteur de l'article */
    public $date; /* La date de création de l'article */
    public $modifier; /* Le bouton servant a modifier un article */
    public $supprimer; /* Le bouton servant à supprimer un article */

    

    public function setRow(){

        echo "<div class=\"row mt-5 justify-content-between\">";

    }

    public function setArticle(){

        echo "<div class=\"col-3\">";
        echo "<div class=\"position-relative toutarticle\">";
       
    }

    public function setTitre($titre){

        $this->titre .= "<h3 class=\"text-center fs-4 fw-bold\">$titre</h3>";

    }

    public function setImage($image){

      $this->image .= "<img class=\"imgart\" src=\"$image\">";

    }

    public function setTexte($texte){

      $this->texte .= "<p class=\"text-secondary\">$texte</p>";

    }

    public function setCategorie($categorie){

      $this->categorie .= "<div class=\"catauteur position-absolute bottom-0\"><div class=\"cercle col-2\">$categorie</div>";

    }

    public function setAuteurDate($auteur, $date){

      $this->date .= "<h5 class=\"auteur text-end col-10\">$auteur - $date</h5></div></div>";

    }

    public function setModifier($modifier){

       $this->modifier .= "<div class=\"row justify-content-around\"><button class=\"btn btn-primary btn-sm text-decoration-none col-4 mt-3\"><a $modifier class=\"text-decoration-none text-white\">MODIFIER</a></button>";
        
    }

    public function setSupprimer($supprimer){

        $this->supprimer.= "<button class=\"btn btn-primary btn-sm text-decoration-none col-4 mt-3\"><a $supprimer class=\"text-decoration-none text-white\">SUPPRIMER</a></button></div></div>";
    }

    public function getIndex(){

        $this->HTML = "";
        $this->HTML .= $this->article;
        $this->HTML .= $this->titre;
        $this->HTML .= $this->image;
        $this->HTML .= $this->texte;
        $this->HTML .= $this->categorie;
        $this->HTML .= $this->auteur;
        $this->HTML .= $this->date;
        $this->HTML .= $this->modifier;
        $this->HTML .= $this->supprimer;
        echo $this->HTML;
    }

}

echo "<main class=\"container\">";

include "./affichageadmin.php";

// $myIndex->setModifier("href=\"edit.php\"");
// $myIndex->setSupprimer("href=\"#\"");
// $myIndex->getIndex();


echo "</div></div></main>";

include "./template/footer.php";

?>