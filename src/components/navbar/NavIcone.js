import "../../App.css"
import "../css/navbar.css"
import React, { useState,useEffect } from 'react';
import BiHouse from "./icones/BiHouse";

const orange = "#FF8811";
const dark = "##253141"

const NavIcone = (props) => {
    const active = true;
    // if(active){
        return(
            <>
                {/* <use href={props.src} style={props.color}></use> */}
                <BiHouse color={orange}></BiHouse>
                <p>{props.navText}</p>
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