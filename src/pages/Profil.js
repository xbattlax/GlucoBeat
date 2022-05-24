//components
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";
import ProfilInfo from "../components/ProfilInfo";
import ProfilCard from "../components/ProfilCard";
import "../components/css/profil.css"

//images
import bedTime from "../images/bedTime.png"
import balance from "../images/balance.png"


const orange = "#FBD1A2";
const lightGreen = "#9FD2AA"

const Profil = () => {
    
    return(
    <>
        <Header pageName="Profil"></Header>
        <ProfilInfo username="Damien Chartier"></ProfilInfo>
        <div className="cardContainer">
            <ProfilCard
                color={lightGreen}
                src={bedTime}
                titre="Sommeil :"
                alt="lune"
                data = "8h"
            ></ProfilCard>
            <ProfilCard
                color={orange}
                src={balance}
                titre="Poids :"
                alt="Bonhomme sur une balance"
                data = "56 Kg">
            </ProfilCard>
        </div>
        <Button
            color = "orange"
            logout = {true}
            text = "Déconnexion"
        ></Button>
        <Navbar location="Profil"></Navbar>
    </>
    )   
};
export default Profil;