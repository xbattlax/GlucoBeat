//components
import Container from "../components/Container";
import HeaderConnexion from "../components/HeaderConnexion";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";
import React from "react";



//Images


//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#9FD2AA";


const Accueil = () => {

    return(
        <>
            <Button color={"orange"} logout={true} text={"logout"}/>
            <Navbar location="Profil"></Navbar>
        </>
    )
};
export default Accueil;