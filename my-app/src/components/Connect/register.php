<?php
# Register.php
# This file is used to register a new user.

function register($username, $password, $email, $firstname, $lastname, $phone, $address, $city, $state, $zip, $country, $conn) {
    // Check if username already exists
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("s", $username);
    $stmt->execute();
    if ($stmt->num_rows > 0) {
        // Username already exists
        return false;
    } else {
        // Username does not exist
        // Hash password
        $password = password_hash($password, PASSWORD_DEFAULT);
        // Insert new user into database
        $sql = "INSERT INTO users (username, password, email, firstname, lastname, phone, address, city, state, zip, country) VALUES ('$username', '$password', '$email', '$firstname', '$lastname', '$phone', '$address', '$city', '$state', '$zip', '$country')";
        if ($conn->query($sql) === TRUE) {
            // User successfully registered
            return true;
        } else {
            // Error inserting user into database
            return false;
        }
    }
}