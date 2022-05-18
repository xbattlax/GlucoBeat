import "../App.css"
import "./css/card.css"

const TauxGlucose = (props) => {
    return(
        <div className="card" style={{backgroundColor: props.color}}>
            <div className="cardText">
                <p>{props.chiffre}</p>
                <p>g/L</p>
            </div>
            <img src={props.src} alt={props.alt} width="150" height="110"></img>
        </div>
    );
};

export default TauxGlucose;