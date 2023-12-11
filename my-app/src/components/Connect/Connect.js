import React from 'react';
import '../../General.css';
import './Connect.css';

function Connect() {
  return (
    <div className="Connect">
      <p>Basic App</p>
      <form>
        <label>Email : <input type="email" name="email" /></label>
        <label>Password : <input type="text" name="password" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Connect;
