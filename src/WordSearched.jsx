import './WordSearched.css';
import WordDescription from './WordDescription';
export default function WordSearched({searchedWord}){
    return (
      <>
        <div className="WordSearched">
          <div className="word">
            <h1>{searchedWord.word}</h1>
            <p>{searchedWord.phonetic}</p>
          </div>
        </div>
        <WordDescription searchedWord = {searchedWord}/>
        </>
    )
}