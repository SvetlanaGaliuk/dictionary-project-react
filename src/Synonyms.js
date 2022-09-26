import React from "react";

export default function Synonyms(props) {
  // console.log(props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}, </span>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
