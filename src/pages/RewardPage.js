import React from "react";
import { useLocation } from "react-router-dom";
import './prize.css';
import play from './timer.png';
const RewardPage = () => {
    const location = useLocation();
    const reward = location.state?.reward || "No Prize"; // Default to "No Prize" if no reward is passed

    return (
        <div className="reward-container">
            <h1>You won: {reward}</h1>
            <h2>Thank you for participating!</h2>
            

        </div>
    );
};

export default RewardPage;