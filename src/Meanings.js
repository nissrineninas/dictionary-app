import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meaning.partOfSpeech);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p id="definition">
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <p id="example">
              <strong>Example: </strong>
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
