import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState({
    status: null,
    message: "",
    isNewRequest: false,
  });

  return (
    <>
      <h1 className="header-text">Search-A-Word!</h1>
      <Search result={result} setResult={setResult} />
      <div className="result-container">
        <Results result={result} />
      </div>
      <Footer />
    </>
  );
}

export default App;
