import './Header.css';
export default function Header(){
    return (
        <header className="Header">
        <h1>Logo</h1>
        <div className="displayOptions">
          <div className="textFont">changeFont</div>
          <div className="appearence">Dark Mode</div>
        </div>
        </header>
    )
}