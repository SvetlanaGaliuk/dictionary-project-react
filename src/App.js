import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
            <h1>Dictionary</h1>
          </div>
          <a
            className="App-link btn btn-primary shadow"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
