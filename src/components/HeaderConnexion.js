import "../App.css"
import "./css/headerConnexion.css"

//images
import logo from "../images/glucoBeat.png"

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";



const HeaderConnexion = (props) => {
    return(
        <div className="header">
            <img src={logo} alt="retour en arrière"></img>
            <h1>GlucoBeat</h1>
        </div>
    );
};

export default HeaderConnexion;