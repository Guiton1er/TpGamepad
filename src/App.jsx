import Gamepad from "./components/Gamepad.jsx";
import Board from "./components/Player.jsx";
import './App.css'
import {useState} from "react";

function App() {
  const [X , setX] = useState(50);
  const [Y , setY] = useState(50);

  const sideStep = x => {
    setX((positionX) => {
        let newPosition = positionX + x;
        if (newPosition < 0) {
            newPosition = 0;
        }
        if (newPosition > 100) {
            newPosition = 100;
        }
        console.log(newPosition);
        return newPosition;
    });
  };

  const updown = y => {
    setY((positionY) => {
        let newPosition = positionY + y;
        if (newPosition < 0) {
            newPosition = 0;
        }
        if (newPosition > 100) {
            newPosition = 100;
        }
        console.log(newPosition);
        return newPosition;
    });
  };

  return (
    <>
      <Gamepad Up={updown} Side={sideStep}/>
      <Board position={[X, Y]}/>
    </>
  )
}

export default App