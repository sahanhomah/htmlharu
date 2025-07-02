import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
var count=0;
const AddButton = () => {
const [number, setCount]=useState(0);
const onIClick=()=>{
setCount(number+1);
}
return(

  <button class="btn" onClick={onIClick}>Increase {number}</button> 
)
}
const DecreaseButton = () => {
const [count, setCount]=useState(0);
const onDClick=()=>{
setCount(count-1);
}
return(

  <button class="btn" onClick={onDClick}>Decrease {count}</button> 
)
}
function App() {
const[value,setValue]=useState();

    const increaseNumber = () =>{
    count=count+1;
        setValue(count);
      
    };
      const decreaseNumber = () =>{
       count=count-1;
        setValue(count);
    };
  return (
  
  <>
<button class="btn" onClick={increaseNumber}>Increment</button>
<button class="btn" onClick={decreaseNumber}>Decrement</button>
<br></br>

the value is {value}
<br></br>
<AddButton/>
<DecreaseButton/>

  </>)
}

export default App;
