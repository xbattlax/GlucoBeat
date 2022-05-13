import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import "../../App.css"
import "../css/navbar.css"
import NavIcone from "./NavIcone";

//svg
import maison from "../../images/Maison.svg"
import calendar from "../../images/calendar-event.svg"
import add from "../../images/plus-circle-fill.svg"
import egg from "../../images/egg.svg"
import person from "../../images/person.svg"

import Dashboard from "../../pages/Dashboard"
import Recettes from "../../pages/Recettes"

const Navbar = () => {
    //const [currentPage, setCurrentPage] = React.useState("/")

    return(
            <div className="navbar">
                <nav>
                <ul>
                    <li><Link className="link" to="/"  ><NavIcone src={maison} navText="Accueil"></NavIcone></Link></li>
                    <li><Link className="link" to="/RDV"><NavIcone src={calendar} navText="RDV"></NavIcone></Link></li>
                    <li><NavIcone src={add}></NavIcone></li>
                    <li><Link className="link" to="/recettes" ><NavIcone src={egg} navText="Recettes"></NavIcone></Link></li>
                    <li><NavIcone src={person} navText="Profil"></NavIcone></li>
                </ul>
                </nav>
            </div>
    
    )
    
};
export default Navbar;