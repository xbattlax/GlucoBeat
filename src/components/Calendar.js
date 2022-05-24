import "../App.css"
import "./css/calendar.css"
import { useState } from 'react';
//calendar
import DatePicker from 'sassy-datepicker';
import { Form, TextField, SubmitField } from "react-components-form";
import Schema from "form-schema-validation";
import moment from "moment-timezone";
import { useCookies } from 'react-cookie';

const loginSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const Calendar = () =>{
    const [date, setDate] = useState(new Date());
    const [cookies, setCookie] = useCookies(['access_token']);
    console.log(cookies['access_token']);
    const onChange = newDate => {
        var date = moment(newDate).tz("Europe/Paris").format("YYYY-MM-DD HH:mm");
        setDate(date);

    };
    return(
        <div className="calendar">
            <DatePicker onChange={onChange} selected={date}></DatePicker>
            <Form
                schema={loginSchema}
                onSubmit={(model) => addRDV(model, date, cookies['access_token'])}
                onError={(errors, data) => console.log("error", errors, data)}
            >
                <TextField name="text" label="Titre :" type="text" />
                <SubmitField value="Enregistrer" />
            </Form>
        </div>
    )
} 

function addRDV(text, date,uuid){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "uuid": uuid,
            "date": date,
            "textRdv": text.text
        })
    };
    fetch('http://13.38.46.86/add_rdv', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}

export default Calendar;