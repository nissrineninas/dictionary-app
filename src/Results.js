import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.results);
  console.log(props.phonetics);

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <Phonetics phonetics={props.results.phonetics} />
        {props.results.meanings.map(function (getAllMeanings, index) {
          return (
            <div key={index}>
              <Meanings meaning={getAllMeanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
