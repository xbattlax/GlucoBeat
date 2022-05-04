import "../../App.css"
import "../css/navbar.css"


const NavIcone = (props) => {
    return(
        <img className="navIcone" src={props.src} alt="Icone menu"></img>
    )
    
};
export default NavIcone;