import "./css/imgConnexion.css"

//images
import image from "../images/imgConnexion.png";


const ImgConnexion = (props) => {
    return(
        <div className="imgConnexion">
            <img src={image} alt="doigt, sucre, réveil"></img>
        </div>
    )
}

export default ImgConnexion;