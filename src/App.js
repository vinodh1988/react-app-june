
import './App.css';
import { useState} from 'react';
import Box from './Box';
import {items,fonts} from './data/data'

const App = ()=>{
  const [font,setFont]=useState(fonts[2])
  return (
    <div>
        <h1>First React App</h1>
        <h3>
        <select value={font} onChange={(event)=>{setFont(event.target.value)}}>
          {fonts.map(x=><option key={x}>{x}</option>)}
        </select>
        </h3>
        <Box title="Fruits" items={items[0]} font={font}></Box>
        <Box title="Vegetables" items={items[1]} font={font}></Box>
        <Box title="Spices" items={items[2]} font={font}></Box>
    </div>
  )
}

export default App;
