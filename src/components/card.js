import "../App.css"
import "./css/Card.css"

const Card = (props) => {
    if (props.img === "true"){
        return(
            <div className="card" style={{backgroundColor: props.color}}>
                <div className="cardText">
                    <p>{props.chiffre}</p>
                    <p>g/L</p>
                </div>
                <img className="img" src={props.src} alt={props.alt}></img>
            </div>
        );
        }else{
        return(
            <div className="card" style={{backgroundColor: props.color}}>
                <div className="cardText">
                    <p>{props.txt}</p>
                </div>
            </div>
        );
    }
    
};
Card.defaultProps = {
    alt: "Image",
    img: "false"
  }   

export default Card;