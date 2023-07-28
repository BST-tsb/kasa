import "./footer.scss";
import logo from "../../img/LOGOwhite.png";

export default function Footer() {
    return ( 
        <footer>
            <div className="footer">
                <img src={logo} alt="Logo Kasa" className="foot-logo" />
                <p className="foot-p">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}
