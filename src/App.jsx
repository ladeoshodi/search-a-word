import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  console.log("successful response:", wordDefinition);
  console.log("error message:", errorMessage);
  return (
    <>
      <h1>Search-A-Word!</h1>
      <Search
        setWordDefinition={setWordDefinition}
        setErrorMessage={setErrorMessage}
      />
      <Results />
      <Footer />
    </>
  );
}

export default App;
