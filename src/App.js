import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Dictionary App</p>
      </header>
      <Search />

      <footer>
        <small className="footer-element">
          Coded by <strong>nightmare.child </strong>, open source on{" "}
          <a href="https://github.com/nissrineninas/dictionary-app">Github</a>
        </small>
      </footer>
    </div>
  );
}
