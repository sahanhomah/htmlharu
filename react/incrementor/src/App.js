import logo from './logo.svg';
import './App.css';
var count=0;
function App() {


    const increaseNumber = () =>{
      count=count+1;
        console.log({count});
    };
      const decreaseNumber = () =>{
      count=count-1;
        console.log({count});
    };
  return (
  
  <>
<button class="btn" onClick={increaseNumber}>Increment</button>
<button class="btn" onClick={decreaseNumber}>Decrement</button>




  </>)
}

export default App;
