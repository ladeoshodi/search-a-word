import { useRef } from "react";
import "./Results.css";
import loadingGif from "../assets/loading.gif";

function Results({ result }) {
  const audioRef = useRef(null);

  function handleClick() {
    audioRef.current.play();
  }

  if (result.isNewRequest) {
    return (
      <div>
        <img src={loadingGif} alt="Loading" />
      </div>
    );
  } else if (result.status === 404) {
    return <div className="error-message">{result.message}</div>;
  } else if (result.status === 200 && result.message) {
    return (
      <>
        <div className="result-header">
          <div className="result-title">{result.message.word}</div>
          <div className="result-audio" onClick={handleClick}>
            🔊
          </div>
          <audio ref={audioRef} src={result.message.phonetics[0].audio}></audio>
        </div>
        <hr className="main-section-divider"></hr>
        <div className="result-body">
          {result.message.meanings.map((meaning, index) => {
            return (
              <>
                <div key={index} className="meanings-card">
                  <p className="meanings-pos">
                    Part of Speech: {meaning.partOfSpeech}
                  </p>
                  <ol>
                    {meaning.definitions.map((definition, index) => {
                      return (
                        <li key={index}>
                          Definition: {definition.definition}
                          <ul>
                            {definition.example && (
                              <li>Example: {definition.example}</li>
                            )}
                          </ul>
                        </li>
                      );
                    })}
                  </ol>
                  {!!meaning.synonyms.length && (
                    <>
                      {" "}
                      <p>Synonyms ({meaning.partOfSpeech})</p>
                      <ol>
                        {meaning.synonyms.map((synonym, index) => {
                          return <li key={index}>{synonym}</li>;
                        })}
                      </ol>
                    </>
                  )}
                  {!!meaning.antonyms.length && (
                    <>
                      {" "}
                      <p>Antonyms ({meaning.partOfSpeech})</p>
                      <ol>
                        {meaning.antonyms.map((antonym, index) => {
                          return <li key={index}>{antonym}</li>;
                        })}
                      </ol>
                    </>
                  )}
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Results;
