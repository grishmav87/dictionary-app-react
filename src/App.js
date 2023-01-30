import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div>
      <div className="App">
        <Dictionary defaultSearchword="orangutan" />
      </div>

      <footer>
        <a
          href="https://github.com/grishmav87/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Grishma V.{" "}
        <a
          href="https://gilded-phoenix-721b05.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
