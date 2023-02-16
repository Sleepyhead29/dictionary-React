import "./App.css";
import Header from "./Header";
import UserInput from "./UserInput";
import WordSearched from "./WordSearched";
import WordDescription from "./WordDescription";
function App() {
  return (
    <div className="App">
      <Header/>
      <UserInput/>
      <WordSearched/>
      <WordDescription/>
      <hr />
        <p>Source</p>
    </div>
  );
}

export default App;
