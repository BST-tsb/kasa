import "./navbar.scss";
import logo from "../../img/LOGO.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="container-img">
                <img src={logo} alt="Logo Kasa" className="head-logo" />
            </div>

            <nav className="navbar">
            <ul className="head-list">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
            </ul>
            </nav>
        </header>
    
    );
}
