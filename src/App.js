
import { useState, useEffect, useMemo } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

//import Sidenav from "examples/Sidenav";
//import Configurator from "examples/Configurator";


//import routes from "./routes";


import Card from "./components/Card";
import HeaderDash from "./components/HeaderDash";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Recettes from "./pages/Recettes";


import zigzag from './images/zigzag.png';
import RDV from "./pages/RDV";

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
  const blue = "#1C6BA4";
  const green = "#0D7B25";

  

  if (dev){ 
    return (
      <Dashboard></Dashboard>
    );

  }

}
