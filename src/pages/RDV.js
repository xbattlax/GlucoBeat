//components
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import Calendar from "../components/Calendar";

//calendar
import DatePicker from 'sassy-datepicker';


//Images

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";


const RDV = () => {
    const onChange = (date) => {
        console.log(date.toString());
    };
    return(
    <>
        <Header pageName="Mes rendez-vous"></Header>
        <Calendar></Calendar>
        <Navbar location="RDV"></Navbar>
    </>
    )
    
};
export default RDV;