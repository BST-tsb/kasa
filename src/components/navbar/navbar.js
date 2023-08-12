import "./navbar.scss";
import logo from "../../img/LOGO.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    const route = window.location.pathname;
    return (
        <header>
            <div className="container-img">
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" className="head-logo" />
                </Link>
            </div>

            <nav className="navbar">
            <ul className="head-list">
                <li className={route === '/' ? 'active' : 'unactive'}><Link to="/">Accueil</Link></li>
                <li className={route === '/about' ? 'active' : 'unactive'}><Link to="/about">A Propos</Link></li>
            </ul>
            </nav>
        </header>
    
    );
}
