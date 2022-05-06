import "../App.css"
import "./css/header.css"

const HeaderDash = (props) => {
    return(
        <div className="header">
            <h1>{props.pageName}</h1>
        </div>
    );
};

export default HeaderDash;