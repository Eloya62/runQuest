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

function delete_event($id_event) {
    if (empty($id_event)){
        $response = array("error" => "Please fill in all fields.");
        echo json_encode($response);
        return;
    }
    $sql = "DELETE FROM 'evenement' WHERE 'id_evenement' = ?";
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $stmtdpt = $conn->prepare($sql);
    $stmtdpt->bindParam(1, $id_event);
    $stmtdpt->execute();

    if ($stmtdpt->rowCount() > 0) {
        $response = array("success" => "Event deleted.");
        echo json_encode($response);
        return;
    } else {
        $response = array("error" => "Event not found.");
        echo json_encode($response);
        return;
    }
}


delete_event($id_event);
?>