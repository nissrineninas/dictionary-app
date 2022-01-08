import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  //add this later
  //   function playAudio(event) {
  //     event.preventDefault();

  //   }
  return (
    <div className="phonetics">
      <strong>Phonetics</strong>
      {props.phonetics.map(function (phonetics, index) {
        return (
          <span key={index}>
            <a href={phonetics.audio} target="_blank" rel="noreferrer">
              listen{" "}
            </a>
            <span id="synonyms"> {phonetics.text} </span>
          </span>
        );
      })}
    </div>
  );
}
