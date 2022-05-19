import "../App.css"
import "./css/card.css"

const CardRDV = (props) => {
    return(
        <div className="cardImg" style={{backgroundColor: props.color}}>
            <h1>{props.text}</h1>
            <p>{props.title}</p>
        </div>
    )
}
CardRDV.defaultProps = {
    alt: "Image",
    img: "false"
}

export default CardRDV;