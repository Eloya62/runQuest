<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

# Register.php
# This file is used to register a new user.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Handle invalid request
    http_response_code(403); // Forbidden
    echo 'Invalid request method';
    exit();
}

function register($firstname, $lastname, $password, $email) {
    if (empty($firstname) || empty($lastname) || empty($password) || empty($email)) {
        $response = array("error" => "Please fill in all fields.");
        echo json_encode($response);
        return;
    }
    // Check if username already exists
    $sql = "SELECT * FROM users WHERE email = ?";
    $conn = new PDO("mysql:host=localhost;port=3306;dbname=runquest", "root", "bku23456drz");
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $email);
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
        $response = array("error" => "Email already exists.");
        echo json_encode($response);
    } else {
        // Username does not exist
        // Hash password
        $password = password_hash($password, PASSWORD_DEFAULT);
        // Insert new user into database
        $sql = "INSERT INTO users (firstname, lastname, password, email) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(1, $firstname);
        $stmt->bindParam(2, $lastname);
        $stmt->bindParam(3, $password);
        $stmt->bindParam(4, $email);

        if ($stmt->execute() === TRUE) {
            $response = array("success" => "User registered successfully.");
        } else {
            $response = array("error" => "Error registering user.");
        }
        echo json_encode($response);
        
        $conn = null;
        return;
    }
}

$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$password = $_POST['password'];
$email = $_POST['email'];
register($firstname, $lastname, $password, $email);
?>