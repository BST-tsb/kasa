import "./footer.scss";
import logo from "../../img/LOGOwhite.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return ( 
        <footer>
            <div className="footer">
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" className="foot-logo" />
                </Link>
                <p className="foot-p">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}
