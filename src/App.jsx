import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue(value === null ? 'X' : null);

    
  }
  return (
    <>
      <button onClick={handleClick} className="border border-dark rounded-0 p-2">{value}</button>
    </>
  );
}
function Board() {
  return (
   <>
   <div className="d-flex  align-items-center justify-content-center">
      <Square />
      <Square />
      <Square />
   </div>
   <div className="d-flex  align-items-center justify-content-center">
    <Square />
    <Square />
    <Square />
   </div>
    <div className="d-flex  align-items-center justify-content-center">
    <Square />
    <Square />
    <Square />
   </div>
   </>
  )
}
const App = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

export default App;
