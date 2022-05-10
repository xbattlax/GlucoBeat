import "../App.css"
import "./css/Card.css"

const Card = (props) => {
    if (props.content === "img,text"){
        return(
            <div className="card" style={{backgroundColor: props.color}}>
                <div className="cardText">
                    <p>{props.chiffre}</p>
                    <p>g/L</p>
                </div>
                <img src={props.src} alt={props.alt}></img>
            </div>
        );
        }
        else if(props.content === "img"){
            return(
                <div className="cardImg" style={{backgroundColor: props.color}}>
                    <img className="img" src={props.src} alt={props.alt}></img>
                </div>
            )
            
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