import "./App.css";
import Header from "./Header";
import UserInput from "./UserInput";
import WordSearched from "./WordSearched";
import WordDescription from "./WordDescription";
import { useState,useEffect } from "react";
function App() {
  // Track current searched word
  const [currentWord,setCurrentWord] = useState('');
  // Track current definition
  const [searchedWord,setSearchedWord] = useState([]);
  // Fetches the current word in the API and returns it's value
  async function fetchWordDictionary(currentWord){
    if(currentWord){
      let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`);
    let result = await response.json();
    setSearchedWord(result);
    console.log(result);
    return result;
    }
    
  }
  useEffect(() => {
   fetchWordDictionary(currentWord);
  }, [currentWord])
  
  return (
    <div className="App">
      <Header/>
      <UserInput setCurrentWord = {setCurrentWord}/>
      {searchedWord.map(word => {
        return <WordSearched  key = {Math.random()} searchedWord = {word}/>
      })}
    </div>
  );
}

export default App;
