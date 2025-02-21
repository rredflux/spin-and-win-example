import { Link } from "react-router-dom";
import React, { useRef , useEffect } from "react";
import './home.css';
// import dollar from './dollar.png';
import wheel from './wheel.png';
import featured from './featured.png';
import play from './play.png';
import { gsap } from "gsap";

import { initializeApp } from "firebase/app";
import{ getDocs, collection, getFirestore, addDoc} from "firebase/firestore";
import './formpage.css';

const firebaseConfig = {
    apiKey: "AIzaSyATINV5ss5NJBlB1w4n3uwut0SGeg3nmQ4",
    authDomain: "buymore-formdata.firebaseapp.com",
    databaseURL: "https://buymore-formdata-default-rtdb.firebaseio.com",
    projectId: "buymore-formdata",
    storageBucket: "buymore-formdata.firebasestorage.app",
    messagingSenderId: "881503761984",
    appId: "1:881503761984:web:3cc9cf63073aad792e11a5",
    measurementId: "G-ES75829EY7"
};
//! init firebase app
const app = initializeApp(firebaseConfig);
//!init services
const myDatabase = getFirestore(app);
//!Collection ref 
const colRef = collection(myDatabase, "testing");
getDocs(colRef)
.then((snapshot)=>{
    // console.log(snapshot.docs);
    let userData = [];
    snapshot.docs.forEach((doc)=>{
        userData.push({ ...doc.data(), id: doc.id});
    })
    console.log(userData)	
})
.catch(err=>{
    console.log(err.message);
});

const Home = () => {

    const dollar1 = useRef(null);
    const dollar2 = useRef(null);
    const dollar3 = useRef(null);
    const dollar4 = useRef(null);
    const dollar5 = useRef(null);
    const dollar6 = useRef(null);

    useEffect(() => {
        gsap.to(dollar1.current, {
            scale: 1.1, 
            yoyo: true,
            duration: 2, 
            repeat:-1,
            ease: "power1.inOut"
        });
        gsap.from(dollar1.current, {
            duration: 1.5, 
            repeat: 0,
            ease: "power4.inOut",
            delay:-0.5
        });
        gsap.to(dollar2.current, {
            scale: 0.9, 
            yoyo: true,
            duration: 2, 
            repeat:-1,
            ease: "power1.inOut"            
        });
        gsap.from(dollar2.current, {
            duration: 1.5, 
            repeat: 0,
            ease: "power4.inOut",
            delay:-0.5         
        });
        gsap.to(dollar3.current, {
            scale: 1.1, 
            yoyo: true,
            duration: 2, 
            repeat:-1,
            ease: "power1.inOut",
          });
        gsap.from(dollar3.current, {
            duration: 1.5, 
            repeat: 0,
            ease: "power4.inOut", 
            delay:-0.5
        }); 
        gsap.to(dollar4.current, {
            scale: 0.9, 
            yoyo: true,
            duration: 2, 
            repeat:-1,
            ease: "power1.inOut"
          });
        gsap.from(dollar4.current, {
            duration: 1.5, 
            repeat: 0,
            ease: "power4.inOut", 
            delay:-0.5
        });
        gsap.to(dollar5.current, {
            scale: 1.1, 
            yoyo: true,
            duration: 2, 
            repeat:-1,
            ease: "power1.inOut"
          });
        gsap.from(dollar5.current, {
            duration: 1.5, 
            repeat: 0,
            ease: "power4.inOut", 
            delay:-0.5
          });
        gsap.to(dollar6.current, {
            scale: 0.9, 
            yoyo: true,
            duration: 2, 
            repeat:-1,
            ease: "power1.inOut",
          });
        gsap.from(dollar6.current, {
            duration: 1.5, 
            repeat: 0,
            ease: "power4.inOut",
            delay:-0.5
        });
      }, []);
    
    return (
        <>
        <div className="container"> 
            <section className="blank"></section>
            <section className="featured-gradient">
                <div className="featured">
                
                    <div class="featuredMiddle">
                        <img src={featured} alt="A round graphic for featured background"></img>
                    </div>

                    <section className="playbutton">
                    <Link to="/formpage">
                        <img src={play} alt="a spining wheel"></img> 
                    </Link>
                    </section>
                </div>
            </section>

 {/* <div class="featuredLeft">
                        <div className="d1">
                            <img ref={dollar1} src={dollar} alt="dollar graphic"></img>
                        </div>
                        <div className="d2">
                            <img ref={dollar2} src={dollar} alt="dollar graphic"></img>
                        </div>
                        <div className="d3">
                            <img ref={dollar3} src={dollar} alt="dollar graphic"></img>
                        </div>
                    </div> */}

                    {/* <div class="featuredRight">
                        <div className="d4">
                            <img ref={dollar4} src={dollar} alt="dollar graphic"></img>
                        </div>
                        <div className="d5">
                            <img ref={dollar5} src={dollar} alt="dollar graphic"></img>
                        </div>
                        <div className="d6">
                            <img ref={dollar6} src={dollar} alt="dollar graphic"></img>
                        </div>
                    </div> */}

            <section className="featured-gradient-prize">
                <div className="featured-prize">
                    <div><h2>Prizes/weekly prizes/ You could Win!</h2></div>
                    <div class="prizes">
                        <div class="priceLeft">
                            <ul>
                                <li>A. 1 prize of 10000 BuyMore Dollars</li>
                                <li>B. 5 prizes of 750 BuyMore Dollars</li>
                                <li>C. 10 prizes of 100 BuyMore Dollars</li>
                                <li>D. 100 prizes of 20 BuyMore Dollars</li>
                            </ul>
                        </div>

                        <div class="priceRight">
                            <img src={wheel} alt="a spining wheel"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-gradient-time">
                    <div className="timer">
                        <h2>72:00:00</h2>
                    </div>
                    <div className="timeHeading">
                        <h2>Spin the wheel every 72 hours for your chance to win BIG! Instant prizes waiting for YOU!</h2>
                    </div>
            </section>

            <section className="featured-gradient-sponser">
                <div className="featured-sponser">
                <div><h2>Try out our Amazing Sponsors</h2></div>
                <div class="sponsers">
                    <div class="spon">
                        <ul>
                            <li>● OPDYPS Association(old people doing young people stuff)</li>
                            <li>● Slorm worm flavoured cola</li>
                            <li>● Pierogi Hat Co.</li>
                            <li>● Gurkin Shake Hut</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>

        </div>
        </>
    );
}

export default Home;