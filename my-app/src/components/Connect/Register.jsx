import React, { useState } from 'react';
import '../../General.css';
import axios from 'axios';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Move this line to the beginning
  
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill out all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('email', email);
    data.append('password', password);
  
    const url = 'http://localhost:5000/register.php';
    axios.post(url, data)
      .then(response => {
        // Access the response data
        const responseData = response.data;
  
        // Check if there is an error
        if (responseData.error) {
          alert(responseData.error);
        } else {
          // Registration was successful
          alert(responseData.success);
  
          // Redirect to another page (you can replace the URL below)
          window.location.href = '/connect';
        }
      })
      .catch(error => {
        // Handle the error
        console.error("An error occurred:", error);
      });
  }

  return (
    <div className="Connect">
      <p>Basic App</p>
      <form onSubmit={handleSubmit}>
        <label>First Name : <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" /></label>
        <label>Last Name : <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" /></label>
        <label>Email : <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" /></label>
        <label>Password : <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" /></label>
        <label>Confirm Password : <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="text" name="confirmPassword" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;