//components
import Container from "../components/Container";
import GrapheGlucose from "../components/GrapheGlucose";
import HeaderDash from "../components/HeaderDash";
import Navbar from "../components/navbar/Navbar";
import TauxGlucose from "../components/TauxGlucose";
import moment from "moment-timezone";
import { LineChart, Line } from 'recharts';

import React, { useState,useEffect } from 'react';

//Images
import zigzag from '../images/zigzag.png';

//couleurs
const orange = "#FF8811";
const blue = "#155A96";
const green = "#0D7B25";


const Dashboard = () => {
    const [glucose, setGlucose] = useState(0);
    const [taux, setTaux] = useState([]);

    useEffect(() => {
        var date = moment().tz("Europe/Paris").format("YYYY-MM-DD HH:mm");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "uuid": "da61fd19-c611-43f6-8c50-4b378b9e9d3e",
                "date": date
            })
        };
        fetch('http://13.38.46.102/get_recent_glucose_record', requestOptions)
            .then(response => response.json())
            .then(data => setGlucose(Math.round(data.data[0].taux)));

        var targetDate = moment().tz("Europe/Paris").subtract(3, "hours").format("YYYY-MM-DD HH:mm");

        const requestOptions2 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "uuid": "da61fd19-c611-43f6-8c50-4b378b9e9d3e",
                "date": targetDate,
                "dateNow": date
            })
        };
        fetch('http://13.38.46.102/get_glucose_records', requestOptions2)
            .then(response => response.json())
            .then(data => setTaux(data.data.map(
                taux => ({
                            name: moment(taux.created_at).utc().format("HH:mm"),
                                taux: Math.round(taux.taux)
                }))));

        return () => true;
    }, []);

    return(
    <>
        <HeaderDash name="Damien"></HeaderDash>
        <TauxGlucose
            title="Votre taux de glucose :"
            content="cardDash" 
            src={zigzag} 
            color={orange}
            chiffre={glucose}
        >
        </TauxGlucose>
        <GrapheGlucose
            title="Votre taux de glucose :"
            content="txt" 
            color={blue}
            txt="Graphe du taux de glucose"
            data={taux}
        >
        </GrapheGlucose>

        <Navbar location="Home"></Navbar>
    </>
    )
    
};
export default Dashboard;


