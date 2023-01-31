import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="audio-player">
        <ReactAudioPlayer src={props.phonetic.audio} autoPlay controls />
      </div>
      {props.phonetic.text}
    </div>
  );
}
