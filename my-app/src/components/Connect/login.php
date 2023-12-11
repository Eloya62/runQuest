<?php

function login($username, $password, $conn) {
    // Check if username exists
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    if ($result->num_rows > 0) {
        // Username exists
        // Check if password is correct
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct
            return true;
        } else {
            // Password is incorrect
            return false;
        }
    } else {
        // Username does not exist
        return false;
    }
}