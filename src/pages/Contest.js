import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './contest.css';
import wheelSVG from "./wheel.svg"; 
import pointer from "./pointer.svg"; 
import standSVG from "./stand.svg";
import play from './spin.png';
const Contest = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const prizes = [
        { name: "10,000 BuyMore Dollars", probability: 0.001 }, 
        { name: "750 BuyMore Dollars", probability: 0.019 }, 
        { name: "100 BuyMore Dollars", probability: 0.03 }, 
        { name: "20 BuyMore Dollars", probability: 0.95 }, 
        
    ];

    const getRandomPrize = () => {
        const random = Math.random();
        let cumulativeProbability = 0;
        for (const prize of prizes) {
            cumulativeProbability += prize.probability;
            if (random < cumulativeProbability) {
                return prize.name;
            }
        }
        return "No Prize"; 
    };

    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleSpin = () => {
        if (isSpinning) return; 
        setIsSpinning(true);

        setTimeout(() => {
            const prize = getRandomPrize();
            setIsSpinning(false);
            navigate("/reward", { state: { reward: prize } }); // Navigate to /reward with the prize as state
        }, 3000); 
    };

    return (
        <div className="contestcontainer">
            <div className="wheel-container">
                <img
                    src={wheelSVG}
                    alt="Spinning Wheel"
                    className={`wheel ${isSpinning ? "spinning" : ""}`}
                />
                <img 
                    src={pointer}
                    alt="pointer"
                    className="pointer"
                />
                
                <img 
                    src={standSVG}
                    alt="Stand"
                    className="stand"
                />
            </div>
            
            <div className="content-container">
                <h1>Good Luck User!</h1>
                <button onClick={handleSpin} >
                
                    <img src={play} alt="a spining wheel"></img> 
                </button>
                
            </div>
        </div>
    );
};

export default Contest;