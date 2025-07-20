import './App.css';
import { useState } from 'react';

// AddButton receives props
const AddButton = ({ count, setCount }) => {
  const onIClick = () => {
    setCount(count + 1);
  };

  return <button className="btn" onClick={onIClick}>Increase</button>;
};

// DecreaseButton receives props
const DecreaseButton = ({ count, setCount }) => {
  const onDClick = () => {
    setCount(count - 1);
  };

  return <button className="btn" onClick={onDClick}>Decrease</button>;
};

function App() {
  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreaseNumber = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button className="btn" onClick={increaseNumber}>Increment</button>
      <button className="btn" onClick={decreaseNumber}>Decrement</button>
      <br />
      The value is {count}
      <br />
      <AddButton count={count} setCount={setCount} />
      <DecreaseButton count={count} setCount={setCount} />
    </>
  );
}

export default App;
