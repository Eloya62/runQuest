<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require 'vendor/autoload.php';
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;



function login($email, $password) {
    // Check if username exists
    $sql = "SELECT * FROM utilisateur WHERE email = ?";
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $email);
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        // Username exists
        // Check if password is correct
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $row['password'])) {
            $user_email = $row['email'];
            $password = $row['password'];
            $seckey = "走れ轌よ、風の夜に、月海原を、パドルパドル";
            $jwtAccessToken = array(
                'isd' => 'localhost',
                'aud' => 'localhost',
                'email' => $user_email,
                'password' => $password,
            );
            $jwt_encode = JWT::encode($jwtAccessToken,$seckey,'HS256');

            http_response_code(200); 
            $response = array(
                'accessToken' => $jwt_encode,
                'admin' => $row['administrateur'],
                'organisateur' => $row['organisateur']
            );
            echo json_encode($response);
            return true;
        } else {
            http_response_code(401); // Unauthorized
            $response = array('error' => 'Invalid username or password');
            echo json_encode($response);
            return false;
        }
    } else {
        http_response_code(401); // Unauthorized
        $response = array('error' => 'Invalid username or password');
        echo json_encode($response);
        return false;
    }
}
$email = $_POST['email'];
$pwd = $_POST['password'];
return login($email, $pwd);
?>