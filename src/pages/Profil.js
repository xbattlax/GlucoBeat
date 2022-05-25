//components
import Container from "../components/Container";
import HeaderConnexion from "../components/HeaderConnexion";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import ImgConnexion from "../components/ImgConnexion";
import Button from "../components/Button";
import TextConnexion from "../components/TextConnexion";
import React, {useEffect, useState} from "react";
import { useCookies } from 'react-cookie';
import ProfilInfo from "../components/ProfilInfo";
import ProfilCard from "../components/ProfilCard";
import "../components/css/profil.css"
import moment from "moment";
//images
import bedTime from "../images/bedTime.png"
import balance from "../images/balance.png"


const orange = "#FBD1A2";
const lightGreen = "#9FD2AA"


const Profil = () => {
    const [cookies, setCookie] = useCookies(['access_token', 'user']);

    const [sleep, setSleep] = useState(0);
    const [quality, setQuality] = useState(0);
    function defstate(data) {
        data =data.data.data[0];
        const q = data.quality;
        const s = data.hours_sleep;
        setQuality(q);
        setSleep(s);
    }
    useEffect(() => {
        var date = moment().tz("Europe/Paris").format("YYYY-MM-DD HH:mm");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "uuid": cookies['access_token'],
                "date": date
            })
        };

        fetch('http://'+process.env.REACT_APP_API_URI+'/get_sleep_record', requestOptions)
            .then(response => response.json())
            .then(data => defstate(data))

        return () => true;
    }, []);
    return(
    <>
        <Header pageName="Profil"></Header>
        <ProfilInfo username={cookies['user']['name'] + ' ' + cookies['user']['surname']}></ProfilInfo>
        <div className="cardContainer">
            <ProfilCard
                color={lightGreen}
                src={bedTime}
                titre="Sommeil :"
                alt="lune"
                data ={sleep+"h"}
            ></ProfilCard>
            <ProfilCard
                color={orange}
                src={balance}
                titre="Poids :"
                alt="Bonhomme sur une balance"
                data = {cookies['user']['weight']+" Kg"}>
            </ProfilCard>
        </div>
        <Button
            color = "orange"
            logout = {true}
            text = "Déconnexion"
        ></Button>
        <Navbar location="Profil"></Navbar>
    </>
    )   
};
export default Profil;
