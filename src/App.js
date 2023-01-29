import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
