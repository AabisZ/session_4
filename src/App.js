import './App.css';
import React, {useState} from 'react';

function App() {

  let [count,setCount]=useState(0);
  let [isMorning,setMorning]=useState(true);


  return (
    <div className={`App ${isMorning ? 'dayLight' :'App'}`}>
      <h1>Hello World</h1>
      <h1>Day Time = {isMorning ? 'Morning':'Night'}</h1>
      <button onClick={()=> setMorning(!isMorning)}>Change clr</button>

      <h3>Value of counter variable is: {count}</h3>
      <button onClick={
        () => setCount(++count) }>Update counter</button>
      <br></br>
      <button onClick={() => setCount(0)}>Reset</button>

    </div>
  );
}

export default App;
