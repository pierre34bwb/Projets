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
    public $dates; /* La date de création de l'article */

    

    public function setRow(){

        echo "<div class=\"row mt-5 justify-content-between\">";

    }

    public function setArticle(){

        echo "<div class=\"position-relative toutarticle col-3\">";
       

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

    public function setAuteurDate($auteur, $dates){

      $this->dates .= "<h5 class=\"auteur text-end col-10\">$auteur - $dates</h5></div></div>";

    }

    public function getIndex(){

        $this->HTML = "";
        $this->HTML .= $this->article;
        $this->HTML .= $this->titre;
        $this->HTML .= $this->image;
        $this->HTML .= $this->texte;
        $this->HTML .= $this->categorie;
        $this->HTML .= $this->auteur;
        $this->HTML .= $this->dates;
        echo $this->HTML;
    }

}

echo "<main class=\"container\">";

include "./affichage.php";

echo "</div></div></main>";

include "./template/footer.php";

?>