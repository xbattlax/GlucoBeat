//components
import Container from "../components/Container";
import HeaderConnexion from "../components/HeaderConnexion";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";



//Images


//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";


const Connexion = () => {
    
    return(
    <>
        <HeaderConnexion></HeaderConnexion>
        <ImgConnexion></ImgConnexion>
        <Navbar location="RDV"></Navbar>
    </>
    )
    
};
export default Connexion;