import { useEffect, useState } from "react";

function App() {
  let [cntrvisible, setcntrvisible] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setcntrvisible((c) => !c);
    }, 1000);
  });
  return <div>{cntrvisible && <Counter></Counter>}</div>;
}
function Counter() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default App;
