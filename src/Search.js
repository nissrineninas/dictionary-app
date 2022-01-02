import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

export default function Search(event) {
  let [word, setWord] = useState(null);
  let [wordData, setWordData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`loading...${word}`);
    callApi();
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function callApi() {
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios
      .get(apiUrl)
      .then(getDefiniton)
      .catch(function (error) {
        emptyDefinition();
        alert(`${word} cannot be found, please check your entry`);
      });
  }

  function getDefiniton(response) {
    console.log(response.data[0]);
    //add setting of variables in here
    // setWordData({
    //   "phonetics": response.data.phonetics.map(function (getAllPhonetics,index)
    //   { return (
    //     <div key={index}>{getAllPhonetics.text}</div>
    //       );
    //     },

    //     "meanings": response.data.meanings.map(function (getElementsInMeanings, index) {
    //         return (
    //             <span key={index}>{getElementsInMeanings};</span>)},
    //             )[

    //         "partOfSpeech":response.data.meanings.map(function (getAllPartsOfSpeech, index) {
    //         return (
    //             <span key={index}>{getAllPartsOfSpeech.partOfSpeech};</span>)},
    //         "definitions":response.data.meanings.map(function (getAllDefinitions, index) {
    //         return (
    //             <span key={index}>{getAllDefinitions.definitions};</span>)}
    //         ],
    // });
  }

  function emptyDefinition() {
    //empty variable states in here
    setWordData(null);
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
