import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          {" "}
          <h2 className="text-capitalize">{props.results.word}</h2>
          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetic, index) {
              let phoneticData;
              if (props.results.phonetics[0]?.text) {
                phoneticData = phonetic;
              } else if (props.results.phonetics[1]?.text) {
                phoneticData = props.results.phonetics[1];
              } else {
                phoneticData = phonetic;
              }
              return (
                <div key={index}>
                  {index < 1 ? <Phonetics phonetic={phoneticData} /> : null}
                </div>
              );
            })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
