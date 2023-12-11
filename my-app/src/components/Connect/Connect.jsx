import React, { useState } from 'react';
import '../../General.css';
import './Connect.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  }

  return (
    <div className="Connect">
      <p>Basic App</p>
      <form onSubmit={handleSubmit}>
        <label>Email : <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" /></label>
        <label>Password : <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;