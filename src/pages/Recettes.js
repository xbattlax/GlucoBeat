//components
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import RecetteImg from "../components/RecetteImg";
import AvoidFood from "../components/AvoidFood";


//Images

//couleurs
const orange = "#FF8811";
const blue = "#1C6BA4";
const green = "#0D7B25";


const Recettes = () => {
    return(
    <>
        <Header pageName="Recettes"></Header>
        <RecetteImg></RecetteImg>
        <AvoidFood></AvoidFood>
        <Navbar location ="Recettes"></Navbar>
    </>
    )
    
};
export default Recettes;