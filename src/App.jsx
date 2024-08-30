import { useEffect } from "react";
import Search from "./components/Search";
import "./App.css";

function App() {
  async function getWord(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    // getWord("hello");
  }, []);

  return (
    <>
      <h1>Search-A-Word!</h1>
      <Search />
      <div className="result">
        <p>Result will be populated here</p>
      </div>
    </>
  );
}

export default App;
