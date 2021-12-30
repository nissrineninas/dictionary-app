import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Search />

      <footer>
        <small className="footer-element">
          open source code by <strong>nightmare.child </strong> on{" "}
          <a href="https://github.com/nissrineninas/dictionary-app">github</a>
        </small>
      </footer>
    </div>
  );
}
