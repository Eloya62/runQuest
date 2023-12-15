<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

# Create-race.php
# This file is used to create races.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Handle invalid request
    http_response_code(403); // Forbidden
    echo ('Invalid request method');
    exit();
}

function create_race($nom_course, $date_course, $distance_m, $d_plus, $d_minus, $lon, $lat, $descr, $departement, $region) {
    if (empty($nom_course) || empty($date_course) || empty($distance_m) || empty($d_plus) || empty($d_minus) || empty($lon) || empty($lat) || empty($descr) || empty($departement) || empty($region)) {
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

    $sqlrg = "SELECT id_region FROM region WHERE nom_region = ?";
    $stmtrg = $conn->prepare($sqlrg);
    $stmtrg->bindParam(1, $region);
    $stmtrg->execute();

    if ($stmtrg->errorCode() != '00000') {
        $errorInfo = $stmtrg->errorInfo();
        $conn = null;
        echo "Error executing SELECT query: {$errorInfo[2]}";
        exit();
    }
    if ($stmtrg->rowCount() == 0) {
        $conn = null;
        $response = array("error" => "Region doesn't exist.");
        echo json_encode($response);
        exit();
    }

    // Check if race already exists
    $sql = "SELECT * FROM course WHERE ((nom_course = ?) and (date_course = ?) and (departement = ?) and (region = ?))";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $nom_course);
    $stmt->bindParam(2, $date_course);
    $stmt->bindParam(3, $departement);
    $stmt->bindParam(4, $region);
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
        $response = array("error" => "race already exists.");
        echo json_encode($response);
    } else {
        // Insert new race into database
        $sql = "INSERT INTO course (nom_course, date_course, distance_m, d_plus, d_minus, descr, departement, region) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        //$sql = "INSERT INTO course (nom_course) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(1, $nom_course);
        $stmt->bindParam(2, $date_course);
        $stmt->bindParam(3, $distance_m);
        $stmt->bindParam(4, $d_plus);
        $stmt->bindParam(5, $d_minus);
        $stmt->bindParam(6, $descr);
        $stmt->bindParam(7, $departement);
        $stmt->bindParam(8, $region);
        if ($stmt->execute() === TRUE) {
            $response = array("success" => "race registered successfully.");
        } else {
            $response = array("error" => "Error registering race.");
        }
        echo json_encode($response);
        
        $conn = null;
        return;
    }
}

$nom_course = $_POST['nom_course'];
$date_course = $_POST['date_course'];
$descr = $_POST['descr'];
$distance_m = $_POST['distance_m'];
$d_plus = $_POST['d_plus'];
$d_minus = $_POST['d_minus'];
$lon = $_POST['lon'];
$lat = $_POST['lat'];
$departement = $_POST['department'];
$region = $_POST['region'];
create_race($nom_course, $date_course, $distance_m, $d_plus, $d_minus, $lon, $lat, $descr, $departement, $region);
?>