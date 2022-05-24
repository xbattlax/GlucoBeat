//components
import Container from "../components/Container";
import HeaderConnexion from "../components/HeaderConnexion";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";
import FormConnexion from "../components/FormConnexion";



//Images


//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#9FD2AA";


const Connexion = (prop) => {
    return(
    <>
        <HeaderConnexion></HeaderConnexion>
        <ImgConnexion></ImgConnexion>
        <FormConnexion></FormConnexion>
        <TextConnexion ></TextConnexion>
    </>
    )
};
export default Connexion;