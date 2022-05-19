
import { useState, useEffect, useMemo } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

//import Sidenav from "examples/Sidenav";
//import Configurator from "examples/Configurator";


//import routes from "./routes";

import Dashboard from "./pages/Dashboard";
import Recettes from "./pages/Recettes";
import RDV from "./pages/RDV";
import Accueil from "./pages/Accueil.js";
import Connexion from "./pages/Connexion.js";


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
        <div className="App">
          <Routes>
            <Route path="Accueil" element={ <Accueil/> } />
            <Route path="Connexion" element={ <Connexion/> } />
            <Route path="/" element={ <Dashboard/> } />
            <Route path="recettes" element={ <Recettes/> } />
            <Route path="RDV" element={ <RDV/> } />
          </Routes>
        </div>
    );

  }

}
