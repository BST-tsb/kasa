import Navbar from "../../components/navbar/navbar"; 
import Footer from "../../components/footer/footer"; 
import "./error.scss";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="home">
            <Navbar />
            <main className="error">
                <h2 className="error-main">404</h2>
                <p className="text-error">Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/' className="return">Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </div>
    )
}