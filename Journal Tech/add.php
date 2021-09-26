<?php

$host = "localhost:3308";
$name = "journaltech";
$user = "root";
$pass = "";


    try 
    {
        $db = new PDO ("mysql:host=$host;dbname=$name", $user, $pass);
    } catch (PDOException $e) 
    {
        $error = "Erreur :" . $e->getMessage() . "<br>";
        print $error;
        die;
    }

if (isset($_POST['submit'])){

    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $titre = validate($_POST['titre']);
    $images = validate($_POST['images']);
    $paragraphe = validate($_POST['paragraphe']);
    $auteur = validate($_POST['auteur']);
    $dates = validate($_POST['dates']);
    $categorie = validate($_POST['categorie']);

    echo $titre . "</br>";
    echo $images . "</br>";
    echo $paragraphe . "</br>";
    echo $auteur . "</br>";
    echo $categorie . "</br>";
    
    if ($categorie == "JS")
    {
        $categorie = 1;
    }
    elseif ($categorie == "PHP")
    {
        $categorie = 2;
    }
    elseif ($categorie == "CSS")
    {
        $categorie = 3;
    }

    $article_date = "titre: $titre // images: $images // paragraphe: $paragraphe // auteur: $auteur // dates: $dates // categorie: $categorie";

    if (empty($titre)){
        header("Location: publier.php?error=Un Titre est obligatoire&$article_date");
    }elseif(empty($images)){
        header("Location: publier.php?error=Une image est obligatoire&$article_date");
    }elseif(empty($paragraphe)){
        header("Location: publier.php?error=Une paragraphe est obligatoire&$article_date");
    }elseif(empty($auteur)){
        header("Location: publier.php?error=Un Auteur est obligatoire&$article_date");
    }elseif(empty($categorie)){
        header("Location: publier.php?error=Une Catégorie est obligatoire&$article_date");
    }else{
        echo "Article modifié" . "</br>";
        $sql = "INSERT INTO article(titre, images, paragraphe, auteur, dates, id_categorie) 
        VALUES('$titre', '$images', '$paragraphe', '$auteur', '$dates', '$categorie')";
        $sqlcat ="INSERT INTO categorie(nom_categorie) VALUES ('$categorie')";
        $result = $db->query($sql);
        $resultcat = $db->query($sqlcat);
        if ($result)
        {
            echo "success" . "</br>";
        }
        else
        {
            echo "fatal error" . "</br>";
        }
    }
}

echo "<br><a href=\"publier.php\">Retour au formulaire</a>";

?>