//components
import Container from "../components/Container";
import HeaderDash from "../components/HeaderDash";
import Navbar from "../components/navbar/Navbar";

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
        <HeaderDash name="Damien"></HeaderDash>
        <DatePicker onChange={onChange} />
        <Navbar></Navbar>
    </>
    )
    
};
export default RDV;