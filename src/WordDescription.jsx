import "./WordDescription.css";
export default function WordDescription({ searchedWord }) {
  return (
    <div className="WordDescription">
          {searchedWord.meanings.map((meaning) => {
            return (
              <>
                <div className="type">
                  {meaning.partOfSpeech}
                  <hr />
                </div>
                <div className="definition">
                  <h3>Meaning</h3>
                  <ul>
                    {meaning.definitions.map((definition) =>{
                      return <li>{definition.definition}</li>
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        
        <div className="synonyms">
          <p>
            Synonyms:<span>blablabls</span>
          </p>
        </div>
      
    </div>
  );
}
