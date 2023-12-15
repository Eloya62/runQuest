<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    // Handle invalid request
    http_response_code(403); // Forbidden
    echo ('Invalid request method');
    exit();
}

function get_races_events(){
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $sql = "SELECT * from course inner join evenement_course on course.id_course = evenement_course.id_course where evenement_course.id_evenement = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $_GET['id']);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}

get_races_events();