import "./WordDescription.css";
export default function WordDescription({ searchedWord }) {
  return (
    <div className="WordDescription">
      {searchedWord.meanings.map((meaning) => {
        return (
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
                    <>
                    <li>{definition.definition}</li>
                    <p>{definition.example?`"${definition.example}"`:''}</p>
                    </>
                  );
                  
                })}
              </ul>
              <div className="synonyms">
                <p>Synonyms: 
                {meaning.synonyms.map((synonym) =>{
                 return <span>{synonym}</span>
                })}      
                </p>
              </div>
            </div>
          </>
        );
      })}
      
    </div>
  );
}
