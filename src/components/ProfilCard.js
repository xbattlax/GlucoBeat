import "../App.css"
import "./css/profilCard.css"

const ProfilCard = (props) => {
    return(
        <div className="profilCard" style={{backgroundColor: props.color}}>
            <img src={props.src} alt={props.alt}></img>
            <p>{props.titre}</p>
            <h3>{props.data}</h3>
        </div>
    )
}

export default ProfilCard;