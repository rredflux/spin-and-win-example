import { Link } from "react-router-dom";
import './instructions.css';


const Instructions = () => {
    return (
        <div className="instructions">  
            <div className="heading"> 
                <h1>INSTRUCTIONS</h1>
            </div>

            <div className="content"> 
                <div className="text">
                    <h2>How to Play</h2>
                    <ol>
                        <li>Click the Spin Now button to activate the prize wheel.</li>
                        <li>Watch the wheel spin and stop at your result:
                            <ul>
                                <li>Win Big: If you win, you'll receive a notification on how to claim your prize.</li>
                                <li>Try Again: Don't worry—come back in 72 hours to play again!</li>
                            </ul>
                        </li>
                        <li>Fill out the form with your details to finalize the result.</li>
                        <li>Winners must answer a simple skill-testing question to claim their prize.</li>
                    </ol>
                    <h2>Important Rules</h2>
                    <ul>
                        <li>You can play only once every72 hours if you win and once every 24 hours if you lose</li>
                        <li>Login to account is required to participate.</li>
                        <li>Results are determined upon submission of your details. In case of discrepancies, the database results are final and binding.</li>
                        <li>Review our Terms and Conditions for full contest details.</li>
                    </ul>
                    <h2>Other prizes lucky winners take home:</h2>
                    <ul>
                        <li>Grand Prize: 10,000 BuyMore Dollars</li>
                        <li>750 BuyMore Dollars (5 winners)</li>
                        <li>100 BuyMore Dollars (10 winners)</li>
                        <li>20 BuyMore Dollars (100 winners)</li>
                    </ul>
                    <p></p>
                </div>
            </div>

            <div className="continue"> 
                <Link to="/contest"> Continue
                </Link>
            </div>
        </div>
    );
}

export default Instructions;