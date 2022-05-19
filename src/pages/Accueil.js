//components
import Container from "../components/Container";
import HeaderConnexion from "../components/HeaderConnexion";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";



//Images


//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#9FD2AA";


const Accueil = () => {
    
    return(
    <>
        <HeaderConnexion></HeaderConnexion>
        <ImgConnexion></ImgConnexion>
        <Button color = "orange" text = "Connexion"></Button>
        <Button color = "green" text = "Inscription"></Button>
        <TextConnexion ></TextConnexion>
    </>
    )
};
export default Accueil;