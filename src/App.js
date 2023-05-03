import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [text, setText]= useState('Blue')
  const toggleButton = () => {
    if (color === "red") {
      setColor("blue");
      setText('Red')
    } else {
      setColor("red");
      setText('Blue')
    }
  };
  return (
    <div className="App">
      <button onClick={toggleButton} style={{ backgroundColor: color }}>
        Change To {text}
      </button>
    </div>
  );
}

export default App;
