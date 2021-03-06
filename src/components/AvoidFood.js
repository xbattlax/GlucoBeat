import "../App.css"
import "./css/avoidFood.css"
import Card from "./Card.js";

//images
import soda from '../images/soda.png';
import burger from '../images/burger.png';
import gelato from '../images/gelato.png';
import fries from '../images/fries.png';
import plus from '../images/plus.png';


//couleurs
const orange = "#FF8811";
const blue = "#1C6BA4";
const green = "#0D7B25";
const lightGreen = "#9FD2AA";




const AvoidFood = (props) => {
    return(
        <>
            <h3>Aliments à éviter</h3>
            <div className="container">
                <div>
                    <Card
                        content="img"
                        color={orange}
                        src={soda}
                        alt="soda"
                    ></Card>
                    <p>Produits laitiers</p>
                </div>
                <div>
                    <Card
                        content="img"
                        color={orange}
                        src={burger}
                        alt="burger"
                    ></Card>
                    <p>Aliments gras</p>
                </div>
                <div>
                    <Card
                        content="img"
                        color={orange}
                        src={gelato}
                        alt="glace"
                    ></Card>
                    <p>Sucre composé</p>
                </div>
                <div>
                    <Card
                        content="img"
                        color={orange}
                        src={fries}
                        alt="frites"
                    ></Card>
                    <p>Féculents</p>
                </div>
                <div>
                    <Card
                        content="img"
                        color={lightGreen}
                        src={plus}
                        alt="ajouter une recett"
                    ></Card>
                </div>
            </div>
        </>
    );
};

export default AvoidFood;