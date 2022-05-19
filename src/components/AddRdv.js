import "../App.css"
import "./css/card.css"
import { Form, TextField, SubmitField } from 'react-components-form';

const loginSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const AddRdv = (props) => {
    return(
        <div className="cardImg" style={{backgroundColor: props.color}}>
            <form>

            </form>
        </div>
    )
}
Card.defaultProps = {
    alt: "Image",
    img: "false"
}

export default AddRdv;