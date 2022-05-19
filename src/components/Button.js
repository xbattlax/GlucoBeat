import "../App.css"
import "./css/Button.css"


const Button = (props) => {
    return(
        <button className={props.color}>
            <p>{props.text}</p>
        </button>
    );
};

export default Button;