import { useState, useEffect } from 'react';
import './App.css';
import video from "./action.mp4" 


function App() {
const [advice, setAdvice] = useState(" ");



useEffect(() => {
getAdvice()
}, [])
  const getAdvice = async () => {
    const response = await fetch(`https://bored.api.lewagon.com/api/activity `);
    const data = await response.json();
    setAdvice(data.activity);
   
  }
 




  return (
    <div className='app'>
     <div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
     </div>

     <div className='card'>
      <h1 className='heading'>{advice}</h1>
 
      <button onClick={getAdvice} className='button'><span>Generate new advice</span></button></div>
     
      </div>

  );
}

export default App;
