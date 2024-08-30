import "./Search.css";
import { useState } from "react";

function Search({ result, setResult }) {
  const [search, setSearch] = useState("");

  function updateResult(status, message) {
    const currentResult = structuredClone(result);
    currentResult.status = status;
    currentResult.message = message;
    setResult(currentResult);
  }

  async function getDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw {
          status: response.status,
          message: `Whoops, "${word}" not found 😢`,
        };
      }
      const data = await response.json();
      updateResult(response.status, data);
    } catch (error) {
      updateResult(error.status, error.message);
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
