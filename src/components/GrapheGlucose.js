import "../App.css"
import "./css/card.css"

const GrapheGlucose = (props) => {
    return(
        <div className="card" style={{backgroundColor: props.color}}>
            <div className="cardText">
                <p>{props.txt}</p>
            </div>
        </div>
    );
};

export default GrapheGlucose;