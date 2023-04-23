import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary(props) {
  const [searchword, setSearchword] = useState(props.defaultSearchword);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateInput(event) {
    setSearchword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photosApiKey = "eoabf00bft0a33ded02a540cba2b4338";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchword}&key=${photosApiKey}`;

    axios.get(photosApiUrl).then(handlePhotosResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePhotosResponse(response) {
    console.log(response.data.photos);
    setImages(response.data.photos);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="mb-3">Look up a word!</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateInput}></input>
          </form>
          <div className="hint mt-3">
            <em>Suggested words: university, librarian, orangutan, peanuts </em>
          </div>
        </section>
        <Results results={results} />
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading results";
  }
}
