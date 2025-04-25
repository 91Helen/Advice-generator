import React, { useState, useEffect } from 'react'; 
import './App.css'; 
import { colors } from './data'; 

function App() { 
    const [advice, setAdvice] = useState(""); 
    const [bgColor, setBgColor] = useState(0); 

    useEffect(() => { 
      getAdvice() 
      }, []) 
        const getAdvice = async () => { 
          const response = await fetch(`https://bored.api.lewagon.com/api/activity `); 
          const data = await response.json(); 
          setAdvice(data.activity); 
          changeColor(); 
        } 

    const changeColor = () => { 
        let colorIndex = Math.floor(Math.random() * colors.length); 
        setBgColor(colorIndex); 
        document.body.style.backgroundColor = colors[colorIndex]; 
    }; 

    useEffect(() => { 
        document.body.style.backgroundColor = colors[bgColor]; 
    }, [bgColor]); 

    return ( 
        <div className="app" style={{ backgroundColor: colors[bgColor] }}> 
            <div className="card"> 
                <h1 className="heading">{advice}</h1> 
                <button onClick={getAdvice} className="button"> 
                    <span>Generate new advice</span> 
                </button> 
            </div> 
        </div> 
    ); 
} 

export default App;