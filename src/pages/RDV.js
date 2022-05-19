//components
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import Calendar from "../components/Calendar";
import CardRDV from "../components/CardRDV";

//calendar
import DatePicker from 'sassy-datepicker';
import {useEffect, useState} from "react";
import moment from "moment-timezone";

//Images

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#9FD2AA";


const RDV = () => {
    const onChange = (date) => {
        console.log(date.toString());
    };
    const [rdv, setRdv] = useState([]);

    useEffect(() => {
        var date = moment().tz("Europe/Paris").format("YYYY-MM-DD HH:mm");
        console.log(date);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "uuid": "da61fd19-c611-43f6-8c50-4b378b9e9d3e",
                "date": date
            })
        };
        fetch('http://13.38.46.86/get_rdv_records', requestOptions)
            .then(response => response.json())

            .then(data => data.data.map(rdv => ({
                dataRdv: moment(rdv.dateRdv).utc().format("DD-MM HH:mm"),
                text: rdv.textRdv
            })))
            .then(data => setRdv(data))


        return () => true;
    }, []);

    console.log(rdv);
    return(
    <>
        <Header pageName="Mes rendez-vous"></Header>
        <Calendar></Calendar>
        {rdv.map(rdv => (
            <CardRDV text={rdv.text} title={rdv.dataRdv} color={green}></CardRDV>
        ))}
        <Navbar location="RDV"></Navbar>
    </>
    )
    
};
export default RDV;