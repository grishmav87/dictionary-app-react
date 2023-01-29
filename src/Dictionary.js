import React, { useState } from "react";

export default function Dictionary() {
  const [searchword, setSearchword] = useState(null);

  function search(event) {
    event.preventDefault();
  }
  function handleSubmit(event) {
    setSearchword(event.target.value);
    console.log({ searchword });
  }

  return (
    <div className="Wordfinder">
      <form onSubmit={search}>
        <input type="search" onChange={handleSubmit}></input>
      </form>
    </div>
  );
}
