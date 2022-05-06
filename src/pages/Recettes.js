//components
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import RecetteImg from "../components/RecetteImg";


//Images

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";


const Recettes = () => {
    return(
    <>
        <Header pageName="Recettes"></Header>
        <RecetteImg></RecetteImg>
        <Navbar></Navbar>
    </>
    )
    
};
export default Recettes;