<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

# Create-event.php
# This file is used to create events.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Handle invalid request
    http_response_code(403); // Forbidden
    echo ('Invalid request method');
    exit();
}

function create_event($nom_event, $date_debut, $date_fin, $ville, $descr, $departement) {
    if (empty($nom_event) || empty($date_debut) || empty($date_fin) || empty($ville) || empty($departement)) {
        $response = array("error" => "Please fill in all fields.");
        echo json_encode($response);
        return;
    }
    $sqldpt = "SELECT id_dpt FROM departement WHERE nom_dpt = ?";
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $stmtdpt = $conn->prepare($sqldpt);
    $stmtdpt->bindParam(1, $departement);
    $stmtdpt->execute();

    if ($stmtdpt->errorCode() != '00000') {
        $errorInfo = $stmtdpt->errorInfo();
        $conn = null;
        echo "Error executing SELECT query: {$errorInfo[2]}";
        exit();
    }
    if ($stmtdpt->rowCount() == 0) {
        $conn = null;
        $response = array("error" => "Department doesn't exist.");
        echo json_encode($response);
        exit();
    }

    // Check if event already exists
    $sql = "SELECT * FROM evenement WHERE ((nom_event = ?) and (date_debut = ?) and (date_fin = ?) and (ville = ?))";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $nom_event);
    $stmt->bindParam(2, $date_debut);
    $stmt->bindParam(3, $date_fin);
    $stmt->bindParam(4, $ville);
    $stmt->execute();
    // Check for errors in the SELECT query
    if ($stmt->errorCode() != '00000') {
        $errorInfo = $stmt->errorInfo();
        $conn = null;
        echo "Error executing SELECT query: {$errorInfo[2]}";
        exit();
    }

    if ($stmt->rowCount() > 0) {
        $conn = null;
        $response = array("error" => "Event already exists.");
        echo json_encode($response);
    } else {
        // Insert new event into database
        $sql = "INSERT INTO evenement (nom_event, date_debut, date_fin, ville, descr, departement) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(1, $nom_event);
        $stmt->bindParam(2, $date_debut);
        $stmt->bindParam(3, $date_fin);
        $stmt->bindParam(4, $ville);
        $stmt->bindParam(5, $descr);
        $stmt->bindParam(6, $departement);
        if ($stmt->execute() === TRUE) {
            $response = array("success" => "Event registered successfully.");
        } else {
            $response = array("error" => "Error registering event.");
        }
        echo json_encode($response);
        
        $conn = null;
        return;
    }
}

$nom_event = $_POST['nom_event'];
$date_debut = $_POST['date_debut'];
$date_fin = $_POST['date_fin'];
$departement = $_POST['departement'];
$descr = $_POST['descr'];
$ville = $_POST['ville'];
create_event($nom_event, $date_debut, $date_fin, $ville, $descr, $departement);
?>