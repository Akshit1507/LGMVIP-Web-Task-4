import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import { useState } from "react";
import "./App.css";
function App() {
  let [calVal, setCalVal] = useState("");
  const handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  };
  return (
    <center>
      <h1>Calculator</h1>
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer handleClick={handleButtonClick} />
      </div>
    </center>
  );
}

export default App;
