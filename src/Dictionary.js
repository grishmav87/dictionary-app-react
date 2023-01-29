import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [searchword, setSearchword] = useState(null);
  const [results, setResults] = useState(null);

  function handleSubmit(event) {
    setSearchword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  return (
    <div className="Wordfinder">
      <form onSubmit={search}>
        <input type="search" onChange={handleSubmit}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
