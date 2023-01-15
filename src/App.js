import React, { useState } from 'react';
import  counterRed from './features/counter/counterRed';
import './App.css';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './features/counter/counterSlice';

function App() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const counter = useSelector((state) => state)
   

  const handleInc = () => {
    dispatch(increment())
  }
  const handleRes = () => {
    dispatch(reset())
  }
  const handleDec = () => {
    dispatch(decrement())
  }
  

  return (
    <div className="App">   
      <h3>{counter}</h3>
      <button onClick={() => handleInc()}>Increase</button>
      <button onClick={() => handleRes()}>Reset</button>
      <button onClick={() => handleDec()}>Decrease</button>
      </div>
  );
}

export default App;
