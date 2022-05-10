//components
import Container from "../components/Container";
import HeaderDash from "../components/HeaderDash";
import Navbar from "../components/navbar/Navbar";


//Images
import zigzag from '../images/zigzag.png';

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";


const Dashboard = () => {
    return(
    <>
        <HeaderDash name="Damien"></HeaderDash>
        <Container
            title="Votre taux de glucose :"
            content="img,txt" 
            src={zigzag} 
            color={orange}
            chiffre="96"
        >
        </Container>
        <Container
            title="Votre taux de glucose :"
            content="txt" 
            color={blue}
            txt="Graphe du taux de glucose"
        >
        </Container>

        <Navbar></Navbar>
    </>
    )
    
};
export default Dashboard;