import "./banner.scss";



export default function Banner({image, title}) {
    return (
        <div className="banner">
            <img src={image} alt="coline"/>
            <h2>{title}</h2>
        </div>
    );
    
}