import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Search(event) {
  let [word, setWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`loading...${word}`);
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="container-fluid search-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 auto">
            <h2 id="landing-page">
              Let’s
              <br /> get
              <br /> <span className="landing-page">insightful</span>
            </h2>
          </div>
          <div className="vr"></div>
          <div className="col-md-5 auto border-left pl-2 search-form-right">
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
