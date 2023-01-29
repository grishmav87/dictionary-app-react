import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [searchword, setSearchword] = useState(null);

  function handleSubmit(event) {
    setSearchword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="Wordfinder">
      <form onSubmit={search}>
        <input type="search" onChange={handleSubmit}></input>
      </form>
    </div>
  );
}
