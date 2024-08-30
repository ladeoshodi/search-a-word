import "./Search.css";
import { useState } from "react";

function Search({ setWordDefinition, setErrorMessage }) {
  const [search, setSearch] = useState("");

  async function getDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Whoops, "${word}" not found 😢`);
      }
      const data = await response.json();
      setWordDefinition(data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
      setWordDefinition(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      getDefinition(search);
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search for an english word..."
        onChange={handleChange}
        value={search}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
