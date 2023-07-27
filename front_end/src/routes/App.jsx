import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import NewWorldForm from './NewWorldForm.jsx';

export default function App() {
  console.log('i was routed to');
  const [worlds, setWorlds] = useState([]);
  const {state} = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=> {
    axios.get(`http://localhost:3000/app/?username=${state}`).then((response) => {
      setWorlds(response.data)
    })
  }, [])

  function handleClick(e) {
    navigate('/world', {state: {username: state, world: e.currentTarget.value}})
  }

  function addWorldClick() {

    alert('Modal Form to Implement Adding a World')
  }
  if (worlds.length === 0) {
    return (
      <div>
        <div>You have no active worlds! Click placeholder macguffin to make one!</div><br></br>
        <button onClick={() => {handleOpen()}}>Click to Add World</button>
        <NewWorldForm open={open} close={handleClose} username={state}/>
      </div>
    )
  } else {
    return (
      <div >
          <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50%'}}>Hello {state}! Here are your worlds you&apos;ve build</h1>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <Card sx={{width: 1/2}}>
            {worlds.map((world) => {
              return (
                <div key={world._id}>
                  <div style={{display: 'flex', justifyContent:'left', alignItems:'center'}}>
                    <button value={world.name} onClick={(e) => {handleClick(e)}}>{world.name} </button>
                  </div>
                  <div style={{display: 'flex', justifyContent:'left', alignItems:'center'}}>
                    <p>{world.regions.length} established regions</p><br></br>
                  </div>
                </div>
              )
            })}
          </Card>
          </div><br></br>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50%'}}>
          <button onClick={() => {handleOpen()}}>Click to Add World</button>
          <NewWorldForm open={open} close={handleClick} username={state}/>
        </div>
      </div>
    )
  }
}