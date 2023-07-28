import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({id, title, cover}) {

	return (
        <Link to={`/card/${id}`} className="main-card">
            <article >
                <img src={cover} alt={title} />
                <h3>{title}</h3>	
            </article>
        </Link>
	)
}
