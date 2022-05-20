import "../App.css"
import "./css/addDash.css"
import Card from "./Card";

import plus from '../images/plus.png';

const lightGreen = "#9FD2AA";

const Button = (props) => {
    return(
        <div className="addContainer">
            <Card
                content="img"
                color={lightGreen}
                src={plus}
                alt="ajouter une recett"
            >
            </Card>
        </div>
    );
};

export default Button;