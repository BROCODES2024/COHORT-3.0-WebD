import { useState, createContext, useContext } from "react";
import "./App.css";

// Corrected context name to maintain consistent casing
const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbon, setbulbon] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        bulbon: bulbon,
        setbulbon: setbulbon,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
}

function Light() {
  // props are simple; for example, bulbon is a prop to the LightBulb component
  // similarly, setbulbon is a prop to toggle state components
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  //   const [bulbon, setbulbon] = useState(true);
  const { bulbon } = useContext(BulbContext); // Use the corrected context name
  return (
    <div>
      {bulbon ? "bulb-on" : "bulb-off"} {/* Display the bulb's state */}
    </div>
  );
  // here, setbulbon should be used in the LightSwitch component as we can see both LightBulb and LightSwitch are Light children
  // so we can roll up
  // so how to do that? just move the state variable to the LightBulb component
}

function LightSwitch() {
  const { setbulbon } = useContext(BulbContext);

  function toggle() {
    setbulbon((c) => !c); // Toggle the bulb state
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
