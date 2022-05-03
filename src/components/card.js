import "../App.css"
import "./css/Card.css"

const Card = (props) => {
    return(
        <div className="card" style={{backgroundColor: props.color}}>
            <p>{props.content}</p>
        </div>
    );
};

export default Card;