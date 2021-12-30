import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Search(event) {
  let [word, setWord] = useState(null);
  function handleSubmit() {
    event.preventDefault();
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="container search-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <h2 id="landing-page">
              Let’s get <span className="landing-page">insightful</span>
            </h2>
          </div>
          <div className="vr"></div>
          <div className="col-6 border-left pl-2">
            <input
              type="search"
              placeholder="type a word to search for"
              onChange={updateWord}
              autoFocus={true}
            />
            <input type="submit" value="Let's Go!" />
          </div>
        </div>
      </form>
    </div>
  );
}
