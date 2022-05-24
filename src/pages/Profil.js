//components
import Container from "../components/Container";
import HeaderConnexion from "../components/HeaderConnexion";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";
import React from "react";
import { useCookies } from 'react-cookie';
import ProfilInfo from "../components/ProfilInfo";


//Images


//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#9FD2AA";



const Profil = () => {
    const [cookies, setCookie] = useCookies(['access_token', 'user']);

    return(
    <>
        <Header pageName="Profil"></Header>
        <ProfilInfo username={cookies['user']['name'] + ' ' + cookies['user']['surname']}></ProfilInfo>
        <Navbar location="Profil"></Navbar>
    </>
    )
};
export default Profil;
