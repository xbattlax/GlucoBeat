
import { useState, useEffect, useMemo } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

//import Sidenav from "examples/Sidenav";
//import Configurator from "examples/Configurator";


//import routes from "./routes";


import Card from "./components/card";
import HeaderDash from "./components/headerDash";
import zigzag from './images/zigzag.png';

export default function App() {
  const dev = true;
  const [token, setToken] = useState();
  const { pathname } = useLocation();


  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);


  const orange = "#FF8811";
  const bleu = "#155A96";
  const vert = "#0D7B25";

  

  if (dev){
    return (
      <>
        <HeaderDash name="Damien"></HeaderDash>
        <Card 
        img="true" 
        src={zigzag} 
        color={orange}
        chiffre="96"
        ></Card>
        
      </>
    );

  }

}
