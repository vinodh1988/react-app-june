
import './App.css';
import Box from './Box';
import {items} from './data/data'

const App = ()=>{
  return (
    <div>
        <h1>First React App</h1>
        <Box title="Fruits" items={items[0]}></Box>
        <Box title="Vegetables" items={items[1]}></Box>
        <Box title="Spices" items={items[2]}></Box>
    </div>
  )
}

export default App;
