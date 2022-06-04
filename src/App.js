import { useState } from 'react'
import GrandFather from "./GrandFather"

function App() {
  let [count, Setcount] = useState([0,0,0,0,0]);
  const OnclickBtn=()=>{
    let arr=[...count];
    arr=arr.map(value => Math.floor(Math.random()*100));
    Setcount(arr);
  }

  return (
    <>
      <GrandFather count = {count}/>
      <button onClick={OnclickBtn}>랜덤</button>
    </>
  );
}

export default App;