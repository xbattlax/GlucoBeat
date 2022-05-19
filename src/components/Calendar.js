import "../App.css"
import "./css/calendar.css"
import { useState } from 'react';
//calendar
import DatePicker from 'sassy-datepicker';
import { Form, TextField, SubmitField } from "react-components-form";
import Schema from "form-schema-validation";
import moment from "moment-timezone";
const loginSchema = new Schema({
    text: {
        type: String,
        required: true
    },
});

const Calendar = () =>{
    const [date, setDate] = useState(new Date());
    const onChange = newDate => {
        var date = moment(newDate).tz("Europe/Paris").format("YYYY-MM-DD HH:mm");
        setDate(date);

    };
    return(
        <div className="calendar">
            <DatePicker onChange={onChange} selected={date}></DatePicker>
            <Form
                schema={loginSchema}
                onSubmit={(model) => addRDV(model, date)}
                onError={(errors, data) => console.log("error", errors, data)}
            >
                <TextField name="text" label="text" type="text" />
                <SubmitField value="Submit" />
            </Form>
        </div>
    )
} 

function addRDV(text, date){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "uuid": "da61fd19-c611-43f6-8c50-4b378b9e9d3e",
            "date": date,
            "textRdv": text.text
        })
    };
    fetch('http://13.38.46.86/add_rdv', requestOptions)
        .then(response => response.json())
}

export default Calendar;