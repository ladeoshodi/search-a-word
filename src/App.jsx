import { useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
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
      <Results />
      <Footer />
    </>
  );
}

export default App;
