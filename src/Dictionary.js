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

    let pexelsApiKey =
      "IMIYPwgzZaq07zZlUnQ0phwQP78QP9J23z2AWLdVhqI2e8vuSV88CslV";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchword}&per_page=12`;
    let authorizationHeader = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: authorizationHeader })
      .then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
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
