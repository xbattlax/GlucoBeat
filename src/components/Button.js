import "../App.css"
import "./css/button.css"
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const [cookies, setCookie] = useCookies(['access_token', 'user']);
    function logout() {
        setCookie('access_token', '');
        setCookie('user', '');
    }
    if (props.logout) {
        return (<Link to='/'><button className={props.color} onClick={logout} ><p>{props.text}</p></button></Link>)
    }
    return(
        <button className={props.color}>
            <p>{props.text}</p>

        </button>
    );
};

export default Button;