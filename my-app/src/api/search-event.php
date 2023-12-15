<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

# Create-event.php
# This file is used to create events.
if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    // Handle invalid request
    http_response_code(403); // Forbidden
    echo ('Invalid request method');
    exit();
}

function search_event($date_debut, $ville, $departement, $distance) {
    $sql = "SELECT * FROM evenement WHERE 
            (date_debut = COALESCE(?, date_debut)) AND 
            (ville = COALESCE(?, ville)) AND 
            (departement = COALESCE(?, departement)) AND 
            (distance = COALESCE(?, distance)) 
            ORDER BY date_debut ASC";
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $stmtdpt = $conn->prepare($sql);
    $stmtdpt->bindParam(1, $date_debut);
    $stmtdpt->bindParam(2, $ville);
    $stmtdpt->bindParam(3, $departement);
    $stmtdpt->bindParam(4, $distance);
    $stmtdpt->execute();

    $result = $stmtdpt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
    return;
}


update_event($id_event, $nom_event, $date_debut, $date_fin, $ville, $descr, $departement);
?>