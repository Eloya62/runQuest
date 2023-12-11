import React, { useState } from 'react';
import '../../General.css';
import './Connect.css';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
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