import "../App.css"
import "./css/header.css"
import Card from "./Card"

//images
import arrow from "../images/arrow-left.svg"

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";



const HeaderDash = (props) => {
    return(
        <div className="header">
            <img className="retourImg" src={arrow} alt="retour en arrière"></img>
            <h1>{props.pageName}</h1>
        </div>
    );
};

export default HeaderDash;