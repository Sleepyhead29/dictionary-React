import './WordSearched.css';
import WordDescription from './WordDescription';
export default function WordSearched({searchedWord}){
    return (
      <>
        <div className="WordSearched">
          <div className="word">
            <h1>{searchedWord.word}</h1>
            <p>In latin</p>
          </div>
          <button>Play Sound</button>
        </div>
        <WordDescription searchedWord = {searchedWord}/>
        </>
    )
}