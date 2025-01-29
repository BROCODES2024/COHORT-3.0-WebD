import "./App.css";
import { Button } from "./components/Buttons";

function App() {
  return (
    <>
      <div className="h-screen bg-blue-700">
        <Button disabled={false}>Sign up</Button>
      </div>
    </>
  );
}

export default App;
