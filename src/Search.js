import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";
import SearchSubmit from "./SearchSubmit";

export default function Search(event) {
  let [word, setWord] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  if (isSubmitted) {
    return <SearchSubmit word={word} />;
  }

  return (
    <div className="container-fluid search-form">
      <form className="opacity-100" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 auto">
            <h2 id="landing-page-left">
              Let’s
              <br /> get
              <br /> <span className="landing-page">insightful</span>
            </h2>
          </div>
          <div className="vr p-1 opacity-100"></div>
          <div className="col-md-4 auto border-left pl-2 search-form-right">
            <div className="landing-page-right">
              <p className="grey-font">
                Look up some words in our dictionary to find out more about
                their meaning and pronunciation.
              </p>
              <input
                className="search-label"
                type="search"
                placeholder="ex. dictionary"
                onChange={updateWord}
                autoFocus={false}
              />
              <span> </span>
              <input
                className="btn search-btn"
                type="submit"
                value="Let's Go!"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
