import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchSubmit.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchSubmit(props) {
  let [word, setWord] = useState(props.word);
  let [wordData, setWordData] = useState(null);
  let [photos, setPhotos] = useState(null);
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

  function handlePexelResponse(response) {
    console.log(`phots response----------->`);
    console.log(response.data);

    setPhotos(response.data);
    console.log(photos);
  }
  function connectApi() {
    if (!conectToApi) {
      console.log("do not connect to API");
      return;
    }
    setConnectToAPI(false);
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getDefiniton);
    console.log(apiUrl);
    // https://www.pexels.com/api/documentation/
    const pexelsKey =
      "563492ad6f917000010000015784ef031c2b402db410858805e8bff1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=10`;
    console.log(`phots URL ${pexelsApiUrl}`);
    axios
      .get(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsKey}` } })
      .then(handlePexelResponse);

    function getDefiniton(response) {
      // console.log(response.data[0]);
      setWordData(response.data[0]);
      // console.log({ wordData });
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
            <div className="white-space"></div>
            <Photos pics={photos} />
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
