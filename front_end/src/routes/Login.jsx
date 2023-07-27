import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  function handleClick() {
    setCount((count) => count + 1);
    console.log(username);
    navigate('/app', {state: username});
  }
  return (
    <>
      <div>
      </div>
      <h1>Enter Username Please</h1>
      <label>
        Username: <input name='username' defaultValue='' onChange={(e) => {setUsername(e.target.value)}}/>
      </label>
      <div className="card">
        <button onClick={() => {handleClick();}}>
          Continue
        </button>
      </div>
    </>
  )
}

export default App
