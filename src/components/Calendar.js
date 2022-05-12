import "../App.css"
import "./css/calendar.css"

//calendar
import DatePicker from 'sassy-datepicker';

const Calendar = () =>{
    return(
        <div className="calendar">
            <DatePicker></DatePicker>
        </div>
    )
} 

export default Calendar;