import React, { useState, useEffect } from 'react';
import './App.css';
import { images } from './data'; 

function App() {
    const [advice, setAdvice] = useState("");
    const [imageIndex, setImageIndex] = useState(0); 

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = async () => {
        const response = await fetch(`https://bored.api.lewagon.com/api/activity`);
        const data = await response.json();
        setAdvice(data.activity);
        changeImage(); 
    };

    const changeImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setImageIndex(randomIndex); 
    };

    useEffect(() => {
        document.body.style.backgroundImage = `url(${images[imageIndex]})`; 
    }, [imageIndex]);

    return (
        <div className="app" style={{ backgroundImage: `url(${images[imageIndex]})` }}>
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