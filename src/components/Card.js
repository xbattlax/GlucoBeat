import "../App.css"
import "./css/card.css"

const Card = (props) => {
    return(
        <div className="cardImg" style={{backgroundColor: props.color}}>
            <img className="img" src={props.src} alt={props.alt}></img>
        </div>
    )
}
Card.defaultProps = {
    alt: "Image",
    img: "false"
  }   

export default Card;