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
import { BsHouse } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { BsEgg } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

import Dashboard from "../../pages/Dashboard"
import Recettes from "../../pages/Recettes"

const Navbar = (props) => {

const orange = "#FF8811";
const dark = "##253141"
const Navbar = () => {
    //const [currentPage, setCurrentPage] = React.useState("/")
    icons = {
        name : "Home" : {icon : <Test/>, link : "/", color: "black"},
        name : "Recettes" : {icon : <Test/>, link : "/recettes", color: "black"},

    }
    switch (props.isActive){
        case "Home":
            break;
        case "Recettes":
            break;
        default:
            break;

    }
    return(
            <div className="navbar">
                <nav>
                <ul>
                    <li>
                        <Link className="link" to="/"  >
                            <BsHouse color={dark} size="1.7rem"></BsHouse>
                            <p>Accueil</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/RDV">
                            <BsCalendarEvent color="dark" size="1.7rem"></BsCalendarEvent>
                            <p>RDV</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/recettes">
                            <BsEgg color="dark" size="1.7rem"></BsEgg>
                            <p>Recettes</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/profil">
                            <BsPerson color="dark" size="1.7rem"></BsPerson>
                            <p>Profil</p>
                        </Link>
                    </li>
                </ul>
                </nav>
            </div>
    
    )
    
};
export default Navbar;