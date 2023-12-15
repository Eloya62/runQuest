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

function update_event($id_event, $nom_event, $date_debut, $date_fin, $ville, $descr, $departement) {
    if (empty($id_event) || empty($nom_event) || empty($date_debut) || empty($date_fin) || empty($ville) || empty($departement)) {
        $response = array("error" => "Please fill in all fields.");
        echo json_encode($response);
        return;
    }
    
    $sql = "UPDATE evenement SET nom_event = ?, date_debut = ?, date_fin = ?, ville = ?, descr = ?, departement = ? WHERE id_evenement = ?";
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $stmtdpt = $conn->prepare($sql);
    $stmtdpt->bindParam(1, $nom_event);
    $stmtdpt->bindParam(2, $date_debut);
    $stmtdpt->bindParam(3, $date_fin);
    $stmtdpt->bindParam(4, $ville);
    $stmtdpt->bindParam(5, $descr);
    $stmtdpt->bindParam(6, $departement);
    $stmtdpt->bindParam(7, $id_event);
    $stmtdpt->execute();

    if ($stmtdpt->rowCount() > 0) {
        $response = array("success" => "Event updated.");
        echo json_encode($response);
        return;
    } else {
        $response = array("error" => "Event not found.");
        echo json_encode($response);
        return;
    }
}


update_event($id_event, $nom_event, $date_debut, $date_fin, $ville, $descr, $departement);
?>