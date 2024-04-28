
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
