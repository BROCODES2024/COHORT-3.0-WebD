import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-customBlue h-dvh flex flex-col space-y-4 p-4 justify-center">
        <div>Webinar.gg</div>
        <div>Verify Your Age</div>
        <div>Please confirm your birth year.This data will not be stored.</div>
        <input type="text" placeholder="Enter D.O.B" />
        <button className="bg-buttoncolor">continue</button>
      </div>
    </>
  );
}

export default App;
