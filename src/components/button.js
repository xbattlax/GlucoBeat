import "../App.css"
import "./css/button.css"


const Button = (props) => {
    return(
        <button className={props.color}>
            <p>{props.text}</p>
        </button>
    );
};

export default Button;