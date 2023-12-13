<?php

function login($username, $password) {
    // Check if username exists
    $sql = "SELECT * FROM users WHERE username = ?";
    $conn = new PDO("mysql:host=localhost;port=3306;dbname=runquest", "root", "bku23456drz");
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        // Username exists
        // Check if password is correct
        $row = $stmt->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct 
            // Give session id
        } else {
            // Password is incorrect
            return false;
        }
    } else {
        // Username does not exist
        return false;
    }
}