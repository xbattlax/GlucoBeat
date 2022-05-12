//components
import Container from "../components/Container";
import GrapheGlucose from "../components/GrapheGlucose";
import HeaderDash from "../components/HeaderDash";
import Navbar from "../components/navbar/Navbar";
import TauxGlucose from "../components/TauxGlucose";


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
        <TauxGlucose
            title="Votre taux de glucose :"
            content="cardDash" 
            src={zigzag} 
            color={orange}
            chiffre="96"
        >
        </TauxGlucose>
        <GrapheGlucose
            title="Votre taux de glucose :"
            content="txt" 
            color={blue}
            txt="Graphe du taux de glucose"
        >
        </GrapheGlucose>

        <Navbar></Navbar>
    </>
    )
    
};
export default Dashboard;