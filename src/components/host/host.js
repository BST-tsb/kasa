import "./host.scss"
export default function Host(props) {
    
    return (
        <div className="host">
            <p className="name-profil">{props.name}</p>
            <img className="picture-profil" src={props.picture} alt="profil"/>
        </div>
    )
}