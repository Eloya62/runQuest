import './App.css';

function App() {
  return (
    <div className="App">
      <p>Basic App</p>
      <form>
        <label>Email : <input type="email" name="email" /></label>
        <label>Password : <input type="text" name="password" /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
