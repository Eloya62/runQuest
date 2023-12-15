<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    // Handle invalid request
    http_response_code(403); // Forbidden
    echo ('Invalid request method');
    exit();
}

function get_events(){
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $sql = "SELECT id_evenement as id_event, nom_event AS title, date_debut AS dateBegin, ville, departement, descr as description FROM evenement";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}

get_events();