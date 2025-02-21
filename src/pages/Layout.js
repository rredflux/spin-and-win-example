import { Outlet, Link } from "react-router-dom";
import './layout.css';
import logo from './logo.png';



const Layout = () => {
    return (
        <div className="container">
            <header>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo"></img>
                        </Link>    
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to="/formpage">Login</Link></li>
                        </ul>
                    </div>
            </header>
        <Outlet></Outlet>
            <footer>
                <div className="footer">
                    <div className="links">
                        <ul>
                            <h3>Quick Links</h3>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Log Out</Link></li>
                        </ul>
                        <ul>
                            <h3>Contest</h3>
                            <li><Link to="/formpage">Play Now</Link></li>
                            <li><Link to="/instructions">Instructions</Link></li>
                        </ul>
                        <ul>
                            <h3>Others</h3>
                            <li><Link to="/legal">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="logo2">
                    <img src={logo} alt="logo"></img>
                    </div>
                </div>

                <div className="copyright">
                    © 2025 Buy More Dollars. All rights reserved.
                </div>
            </footer>

        </div>
    );
}

export default Layout;