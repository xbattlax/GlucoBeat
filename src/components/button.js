import "../App.css"
import "./css/Button.css"


const Button = (props) => {
    return(
        <button className="btn-primary">
            <p>{props}</p>
        </button>
    );
};

export default Button;