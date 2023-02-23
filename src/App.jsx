import "./App.css";
import Header from "./Header";
import UserInput from "./UserInput";
import WordSearched from "./WordSearched";
import WordDescription from "./WordDescription";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
function App() {
  // Track current searched word
  const [currentWord, setCurrentWord] = useState("");
  // Track current definition
  const [searchedWord, setSearchedWord] = useState([]);
  // Track fetch responseState
  const [responseState, setResponseState] = useState();
  // Fetches the current word in the API and returns it's value
  async function fetchWordDictionary(currentWord) {
    if (currentWord) {
      let response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`
      );

      setResponseState(response.status);
      console.log(response.status);
      let result = await response.json();
      setSearchedWord(result);
      console.log(result);
      return result;
    }
  }
  useEffect(() => {
    fetchWordDictionary(currentWord);
  }, [currentWord]);
  useEffect(() => {
    console.log(searchedWord);
  }, [searchedWord]);
  useEffect(() => {
    console.log(responseState);
  }, [responseState]);
  return (
    <div className="App">
      <Header />
      <UserInput setCurrentWord={setCurrentWord} />
      {responseState === 200 ? (
        searchedWord.map((word) => {
          return <WordSearched key={Math.random()} searchedWord={word} />;
        })
      ) : (
        <NotFound noDef={searchedWord.title} />
      )}
    </div>
  );
}

export default App;
