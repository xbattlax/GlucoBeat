//components
import Card from "../components/Card";
import HeaderDash from "../components/HeaderDash";
import Navbar from "../components/navbar/Navbar";

//Images
import zigzag from '../images/zigzag.png';

//couleurs
const orange = "#FF8811";
const bleu = "#155A96";
const vert = "#0D7B25";


const Dashboard = () => {
    return(
    <>
        <HeaderDash name="Damien"></HeaderDash>
        <Card 
        img="true" 
        src={zigzag} 
        color={orange}
        chiffre="96"
        ></Card>
        <Navbar></Navbar>
    </>
    )
    
};
export default Dashboard;