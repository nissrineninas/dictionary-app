import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <strong>Synonyms</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <span id="synonyms"> {synonym} | </span>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
