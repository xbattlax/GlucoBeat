
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
import Profil from "./pages/Profil.js";
import { useCookies } from 'react-cookie';
import Profil from "./pages/Profil";


export default function App() {
  const dev = true;
  const [uuid, setUuid] = useState();
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies(['access_token', 'user']);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const orange = "#FF8811";
  const blue = "#1C6BA4";
  const green = "#0D7B25";

  

  if (cookies['access_token']) {
    return (
        <div className="App">
          <Routes>
            <Route path="Accueil" element={ <Accueil/> } />
            <Route path="/" element={ <Dashboard/> } />
            <Route path="recettes" element={ <Recettes/> } />
            <Route path="RDV" element={ <RDV/> } />
            <Route path="Profil" element={ <Profil/> } />
          </Routes>
        </div>
    );
  }
    else {
      return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Connexion/> } />
        </Routes>
      </div>);
    }


}
