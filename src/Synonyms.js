import React from "react";
import "./Phonetics.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <strong>Synonyms</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="w2-auto d-inline-flex synonyms-box" key={index}>
              {synonym}
                        </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
