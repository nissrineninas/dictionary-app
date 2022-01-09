import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchSubmit.css";
import axios from "axios";
import Results from "./Results";

export default function SearchSubmit(props) {
  let [word, setWord] = useState(props.word);
  let [wordData, setWordData] = useState(null);
  let [conectToApi, setConnectToAPI] = useState(true);

  connectApi();

  function handleSubmit(event) {
    event.preventDefault();
    setConnectToAPI(true);
    connectApi();
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function connectApi() {
    if (!conectToApi) {
      console.log("do not connect to API");
      return;
    }
    setConnectToAPI(false);
    console.log("connect to API");
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getDefiniton);
    console.log(apiUrl);
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
          <div className="col-md-5 auto">
            <h2 id="landing-page-submit">
              Look up some words in our dictionary to find out more about their
              meaning and pronunciation
            </h2>
            <input
              className="search-label-submit"
              type="search"
              value={word}
              onChange={updateWord}
              autoFocus={false}
            />
            <span> </span>
            <input className="search-btn-submit" type="submit" value="Search" />
            {/*add phrases section*/}
          </div>
          <div className="vr p-1 opacity-100"></div>
          <div className="col-md-6 auto border-left pl-2 search-form-right">
            <div className="landing-page-right-submit">
              <h1>dictionary</h1>
              <div className="definition-box-submit">
                <Results results={wordData} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
