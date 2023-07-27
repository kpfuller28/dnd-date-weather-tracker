import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import RegionsCard from './RegionsCard.jsx';

export default function WorldView() {
  const {state} = useLocation();
  const [world, setWorld] = useState({regions:[]})
  useEffect(() => {
    axios.get(`http://localhost:3000/world?username=${state.username}&name=${state.world}`).then((response) => {
      setWorld(response.data)
    })
  }, [])
  console.log('worldview world: ', world);
  function regionClick() {
    alert('Modal Form to Implement Adding a region');
  }
  return (
    <div>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50%'}}>
        <h1>Hello {world.username}! Welcome to {world.name}</h1>
      </div>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50%'}}>
        <h2>Here are your current regions</h2>
      </div>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50%'}}>
        <RegionsCard world={world}/>
      </div><br></br>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50%'}}>
        <button onClick={() => {regionClick()}}>Add a Region</button>
      </div>
    </div>
    )
}