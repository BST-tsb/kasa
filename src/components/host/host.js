import "./host.scss"
export default function Host(host) {
    
    return (
        <div className="host">
            <p className="name-profil">{host.name}</p>
            <img className="picture-profil" src={host.picture} alt="profil"/>
        </div>
    )
}