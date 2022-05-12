import "../App.css"
import "./css/card.css"

const TauxGlucose = (props) => {
    return(
        <div className="card" style={{backgroundColor: props.color}}>
            <div className="cardText">
                <p>{props.chiffre}</p>
                <p>g/L</p>
            </div>
            <img src={props.src} alt={props.alt}></img>
        </div>
    );
};

export default TauxGlucose;