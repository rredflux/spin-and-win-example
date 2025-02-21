import { Link } from "react-router-dom";
import './legal.css';


const Legal = () => {
    return (
        <div className="legal">  
            <div className="heading"> 
                <h1>TERMS & CONDITIONS</h1>
            </div>

            <div className="content"> 
                <div className="text">
                    <h2>Conditions Relating to the Usage of Data Collected on the Site</h2>
                    <p>The personal information collected on the site will be used solely for contest administration purposes, including verifying eligibility, contacting winners, and awarding prizes and distributing to our third party partners. All data will be securely stored and protected against unauthorized access. By providing consent, participants agree to receive promotional communications from Buy More Dollars and its sponsors, which they can opt out of at any time. Data may be shared with third-party providers strictly for contest fulfillment, marketing purposes and will be retained only as long as necessary for these purposes. Participants have the right to access, correct, or delete their personal information by contacting support@buymoredollars.com.</p>
                    <h2>Conditions Relating to Minimum Age of Users</h2>
                    <p>Participants must be at least 16 years old to enter the contest. If a participant is under the age of 16, they must obtain permission from a parent or legal guardian. Buy More Dollars reserves the right to request proof of consent from guardians at any time and disqualify entries that fail to meet contest requirements.</p>
                    <h2>Conditions Relating to the Chance of Winning and Prize Distribution</h2>
                    <p>Winners are selected through a random draw from all eligible entries. The odds of winning depend on the total number of entries received. Weekly prizes are distributed as outlined in the contest details, and all prizes will be awarded within 6–8 weeks of confirming eligibility and completing the skill-testing question. In case of discrepancies, the decision of Buy More Dollars is final.</p>
                    <h2>Conditions Relating to Opting Out of Communications</h2>
                    <p>Participants who have consented to receive communications from Buy More Dollars or its sponsors may opt out at any time. To unsubscribe, participants can use the "Unsubscribe" link provided in emails or contact support@buymoredollars.com directly.</p>
                </div>
            </div>

            <div className="continue"> 
                <Link to="/instructions"> Continue
                </Link>
            </div>
            </div>
    );
}

export default Legal;