

// Soft UI Dashboard React layouts
import Dashboard from "pages/Dashboard";
import Recettes from "pages/Recettes";


// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import RDV from "./pages/RDV";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: "Maison.svg",
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "recettes",
    key: "recettes",
    route: "/recettes",
    icon: "egg.svg",
    component: <Recettes />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "RDV",
    key: "RDV",
    route: "/RDV",
    icon: "calendar-events.svg",
    component: <RDV />,
    noCollapse: true,
  },



];

export default routes;
