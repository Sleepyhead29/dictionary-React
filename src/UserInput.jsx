import { useRef } from 'react';
import './UserInput.css';

export default function UserInput({setCurrentWord}){
  // Fetch word in dictionary only when form is submitted
  const userInput = useRef();
function handleSearch(e){
  e.preventDefault();
setCurrentWord(userInput.current.value);
}
    return(
        <form action="GET" className='UserInput' onSubmit={handleSearch}>
          <input type="text" placeholder="Search for a word"  ref = {userInput} onChange={(e)=> userInput.current.value = e.target.value}/>
        </form>
    )
}