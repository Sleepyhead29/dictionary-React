import "./WordDescription.css";
import WordMeaning from "./WordMeaning";
export default function WordDescription({ searchedWord }) {
  return (
    <div className="WordDescription">
      {searchedWord.meanings.map((meaning) => {
        return (
         <WordMeaning key={Math.random()} meaning = {meaning}/>
        );
      })}
      
    </div>
  );
}
