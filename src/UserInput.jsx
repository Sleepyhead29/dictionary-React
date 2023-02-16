import './UserInput.css';
export default function UserInput(){
    return(
        <form action="GET" className='UserInput'>
          <input type="text" placeholder="Search for a word"/>
        </form>
    )
}