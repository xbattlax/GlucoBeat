import "../../App.css"
import "../css/navbar.css"
import React, { useState,useEffect } from 'react';
import BiHouse from "./icones/BiHouse";


import { BsHouse } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { BsEgg } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

const orange = "#FF8811";
const dark = "##253141"

const NavIcone = (props) => {
    const active = true;
    // if(active){
        return(
            <>
                {/* <use href={props.src} style={props.color}></use> */}
                <props.obj.value.icon color={props.obj.value.color}></props.obj.value.icon>
                <p></p>
            </>
        )
    // }
    // else if(notActive){
    //     return(
    //         <>
    //             <img className="navIcone" src={props.src} alt="Icone menu"></img>
    //             <p>{props.navText}</p>
    //         </>
    //     )
    // }
    
    
};
export default NavIcone;