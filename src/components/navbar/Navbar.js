import "../../App.css"
import "../css/navbar.css"
import NavIcone from "./NavIcone";

//svg
import maison from "../../images/Maison.svg"
import calendar from "../../images/calendar-event.svg"
import add from "../../images/plus-circle-fill.svg"
import egg from "../../images/egg.svg"
import person from "../../images/person.svg"

const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li><NavIcone src={maison}></NavIcone></li>
                <li><NavIcone src={calendar}></NavIcone></li>
                <li><NavIcone src={add}></NavIcone></li>
                <li><NavIcone src={egg}></NavIcone></li>
                <li><NavIcone src={person}></NavIcone></li>
            </ul>
        </div>
    
    )
    
};
export default Navbar;