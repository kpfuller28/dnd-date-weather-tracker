import {regions} from '../regions.js';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useState} from 'react';
import '../index.css'

export default function NewWorldForm({open, close, username}) {
  const [regionName, setRegionName] = useState('');
  const [regionType, setRegionType] = useState('desert');

  function selectChange(e) {
    console.log(e.target.value);
    setRegionType(e.target.value);
  }
  function nameChange(e) {
    console.log(e.target.value);
    setRegionName(e.target.value);
  }
  function addWorld() {
    console.log('Name then Type: ' + regionName + ' ' + regionType);
  }

  return (
    <Modal open={open} onClose={close}>
      <Box className='newWorldForm'>
        <div style={{alignItems:'center'}}>
          <label>
            Region Name: <input name='regionName' defaultValue='' onChange={(e) => {nameChange(e)}}></input>
          </label>
          <label>
            Region Type: <select name='regionType' value={regionType} onChange={(e) => {selectChange(e)}}>
            {regions.map((region) => {
              return <option value={region}>{region}</option>
            })}
            </select>
          </label>
        </div><br></br>
        <button onClick={addWorld}>Add World</button>
      </Box>
    </Modal>
    )
}