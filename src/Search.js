import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Search(event) {
  let [word, setWord] = useState("");
  let [wordData, setWordData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    connectApi();
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function connectApi() {
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getDefiniton);

    function getDefiniton(response) {
      console.log(response.data[0]);
      setWordData(response.data[0]);
      console.log({ wordData });
    }
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
      <Results results={wordData} />
    </div>
  );
}
