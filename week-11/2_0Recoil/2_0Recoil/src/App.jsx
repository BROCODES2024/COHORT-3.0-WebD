import { useState } from "react";
import "./App.css";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}
function Counter() {
  return (
    <div>
      <Curcount />
      <Increase />
      <Decrease />
    </div>
  );
}
function Curcount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}
function Increase() {
  const setcount = useSetRecoilState(counterAtom);

  function Increasecnt() {
    setcount((c) => c + 1);
  }
  return (
    <div>
      <button onClick={Increasecnt}>Increase</button>
    </div>
  );
}
const Decrease = memo(() => {
  const setcount = useSetRecoilState(counterAtom);

  function Decreasecnt() {
    setcount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={Decreasecnt}>Decrease</button>
    </div>
  );
});

export default App;
