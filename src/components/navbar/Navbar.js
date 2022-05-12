import "../../App.css"
import "../css/navbar.css"
import NavIcone from "./NavIcone";

//svg
import maison from "../../images/Maison.svg"
import calendar from "../../images/burger.png"
import add from "../../images/plus-circle-fill.svg"
import egg from "../../images/egg.svg"
import person from "../../images/person.svg"

const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li><NavIcone src={maison} navText="Accueil"></NavIcone></li>
                <li><NavIcone src={calendar} navText="RDV"></NavIcone></li>
                <li><NavIcone src={add}></NavIcone></li>
                <li><NavIcone src={egg} navText="Recettes"></NavIcone></li>
                <li><NavIcone src={person} navText="Profil"></NavIcone></li>
            </ul>
        </div>
    
    )
    
};
export default Navbar;