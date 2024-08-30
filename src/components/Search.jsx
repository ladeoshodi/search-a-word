import "./Search.css";

function Search() {
  return (
    <form>
      <label htmlFor="search"></label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search for an english word..."
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
