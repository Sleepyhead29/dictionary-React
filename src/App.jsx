import "./App.css";
import Header from "./Header";
import UserInput from "./UserInput";
import WordSearched from "./WordSearched";
import WordDescription from "./WordDescription";
import { useState,useEffect } from "react";
function App() {
  // Track current searched word
  const [currentWord,setCurrentWord] = useState('');
  // Track current definitionin
  const [searchedWord,setSearchWord] = useState();
  // Fetches the current word in the API and returns it's value
  async function fetchWordDictionary(currentWord){
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`);
    let result = await response.json();
    console.log(result);
    return result;
  }
  useEffect(() => {
   fetchWordDictionary(currentWord);
    
  }, [currentWord])
  
  return (
    <div className="App">
      <Header/>
      <UserInput currentWord = {currentWord} setCurrentWord = {setCurrentWord} fetchWordDictionary = {fetchWordDictionary}/>
      <WordSearched/>
      <WordDescription/>
      <hr />
        <p>Source</p>
    </div>
  );
}

export default App;
