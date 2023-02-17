import WordDefinition from "./WordDefinition";
import WordSynonym from "./WordSynonym";

export default function WordMeaning({meaning}){
return(
    <>
    <div className="type">
      <h4>{meaning.partOfSpeech}</h4>
      <hr />
    </div>
    <div className="definition">
      <h4>Meaning</h4>
      <ul>
        {meaning.definitions.map((definition) => {
          return (
           <WordDefinition key = {Math.random()} definition={definition}/>
          );
          
        })}
      </ul>
      <div className="synonyms">
        {meaning.synonyms.map((synonym) =>{
         return <WordSynonym key={Math.random()} synonym = {synonym}/>
        })}      
      </div>
    </div>
  </>
)
}