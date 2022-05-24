//components
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";
import ProfilInfo from "../components/ProfilInfo";



const Profil = () => {
    
    return(
    <>
        <Header pageName="Profil"></Header>
        <ProfilInfo username="Damien Chartier"></ProfilInfo>
        <Navbar location="Profil"></Navbar>
    </>
    )
};
export default Profil;