<?php

$host = "localhost:3309";
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
    

?>