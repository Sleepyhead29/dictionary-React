import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Logo</h1>
        <div className="displayOptions">
          <div className="textFont">changeFont</div>
          <div className="appearence">Dark Mode</div>
        </div>
        <form action="GET">
          <input type="text" />
        </form>
        <div className="wordSearched">
          <div className="word">
            <h1>Hello</h1>
            <p>In latin</p>
            <button>Play Sound</button>
          </div>
        </div>
        <div className="wordDescription">
          <h2>Word type(ex:type)</h2>
          <div className="definition">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                suscipit porro dolor ut dicta illum quasi tempora fuga rerum.
                Eum, eveniet veritatis consequatur voluptas eligendi iste
                maiores aut ut voluptatibus.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                suscipit porro dolor ut dicta.
              </li>
            </ul>
            <div className="synonyms">
              blalalalala
            </div>
          </div>
        </div>
        <p>Source</p>
      </header>
    </div>
  );
}

export default App;
