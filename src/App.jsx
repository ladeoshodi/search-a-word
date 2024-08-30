import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState({ status: null, message: "" });

  console.log("response-status:", result.status);
  console.log("response-message:", result.message);

  return (
    <>
      <h1>Search-A-Word!</h1>
      <Search result={result} setResult={setResult} />
      <div className="result">
        <Results result={result} />
      </div>
      <Footer />
    </>
  );
}

export default App;
