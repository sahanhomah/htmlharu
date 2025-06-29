import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
var count=0;
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

<>the value is {value}</>



  </>)
}

export default App;
