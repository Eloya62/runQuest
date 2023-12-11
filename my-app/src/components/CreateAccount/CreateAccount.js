import React from 'react';
import '../../General.css';

export default function CreateAccount() {
  return(
    <div className="login-wrapper">
      <h2>Create an account</h2>
      <form>
        <label>First Name : <input type="text" name="firstname" /></label>
        <label>Last Name : <input type="text" name="lastname" /></label>
        <label>Date of birth : <input type="date" name="datebirth" /></label>
        <label>Email : <input type="email" name="email" /></label>
        <label>Password : <input type="password" name="password" /></label>
        <label>Password verification : <input type="password" name="passwordcheck" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
