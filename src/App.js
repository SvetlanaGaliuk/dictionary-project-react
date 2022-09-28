import logo from "./logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
            <h1> Dictionary</h1>

            <h2 className="mt-3">What word do you want to look up?</h2>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          <small className="open-source-code">
            <a
              href="https://github.com/SvetlanaGaliuk/dictionary-project-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Svetlana Galiuk
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
