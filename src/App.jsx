// import { useState, useEffect } from "react";

// export default function App() {
//   console.log("line no. 5");
//   const [isRunning, setIsRunning] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const formatTime = (time) => {
//     let minute = Math.floor(time / 60);
//     let second = time % 60;
//     return `${minute} : ${second}`;
//   };
//   function handleOnclick() {
//     setIsRunning((prev) => !prev);
//   }
//   const handleReset = () => {
//     setIsRunning(false);
//     setElapsedTime(0);
//   };
//   useEffect(() => {
//     console.log("line no. 21");
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//       }, 1000);
//     } else {
//       console.log("line no. 28");
//       clearInterval(intervalId);
//     }
//     console.log("line no. 31");
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning]);

//   console.log("line no. 37");
//   return (
//     <div>
//       <h2>Stopwatch</h2>
//       <p>Time: {formatTime(elapsedTime)} </p>
//       <button onClick={handleOnclick}>{isRunning ? "stop" : "start"}</button>

//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }
import { useEffect, useState } from 'react'


function App() {
  const [isRunning,setIsRunning] = useState(false);
  const [elapsedTime,setElapsedTime] = useState(0);

  const formateTime=(elapsedTime)=>{
    const min = Math.floor(elapsedTime/60);
    const sec = elapsedTime%60;
    return `${min}:${sec<10?"0":""}${sec}`;
  }
  const toggle=()=>{
    setIsRunning((prevRunning)=>!prevRunning);
  }
  const reset =()=>{
    setIsRunning(false);
    setElapsedTime(0);
  }
  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId = setInterval(()=>{
        setElapsedTime((prevElapsedTime)=>prevElapsedTime+1);
      },1000);
    }else{
      clearInterval(intervalId);
    }
    return ()=>{
      clearInterval(intervalId);
    }
  },[isRunning]);
  return (
    <>
      <h2>Stopwatch</h2>
      <p>Time: {formateTime(elapsedTime)}</p>
      <button onClick={toggle}>{isRunning?"Stop":"Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App