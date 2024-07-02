
import { useState } from "react";
function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () =>{

   if(counter >= 20) setCounter(counter);

   else setCounter(counter + 1); 
  }


  const removeValue = () =>{

    if(counter <= 0) setCounter(0);

    else setCounter(counter - 1);
  }

  return (
    <>
    
   <h1>Welcome To Basic Counter App</h1>

   <h4>Counter : {counter}</h4>

   <button onClick={addValue}>ADD </button>

   <br />

   <button onClick={removeValue}>REMOVE</button>

   </>
  )
}

export default App
