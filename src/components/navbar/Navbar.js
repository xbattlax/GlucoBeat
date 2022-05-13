import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../../App.css";
import "../css/navbar.css";
import NavIcone from "./NavIcone";

//svg
import { BsHouse } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { BsEgg } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

import Dashboard from "../../pages/Dashboard";
import Recettes from "../../pages/Recettes";

const Navbar = (props) => {
  const orange = "#FF8811";
  const dark = "##253141";
    const icons = [
      {
        name: "Home",
        value: {
          link: "/",
          color: "black",
          text: "Acceuil",
          icon: <BsHouse color="black"/>
        },
      },
      {
        name: "Recettes",
        value: {
          icon: <BsEgg color="black"/>,
          link: "/recettes",
          color: "black",
          text: "Recettes",
        },
      },
      {
        name: "RDV",
        value: {
          icon: <BsCalendarEvent color="black"/>,
          link: "/RDV",
          color: "black",
          text: "RDV",
        },
      },
      {
        name: "Profil",
        value: {
          icon: <BsPerson color="black"/>,
          link: "/profil",
          color: "black",
          text: "Profil",
        },
      },
    ];
    console.log(icons.length)
    switch (props.location) {
      case "Home":
        icons[0].value.icon= <BsHouse color={orange}/>;
        break;
      case "Recettes":
        icons[1].value.icon= <BsEgg color={orange}/>;
        break;
        case "RDV":
        icons[2].value.icon= <BsCalendarEvent color={orange}/>;
      default:
        break;
    }
    return (
      <div className="navbar">
        <nav>
          <ul>


            {icons.map((icon, index) => (
                <li>
                    <Link to={icon.value.link}>
                    {icon.value.icon}
                    <p>{icon.name}</p>
                    </Link>
                </li>
                ))

            }
          </ul>
        </nav>
      </div>
    );
};
export default Navbar;
