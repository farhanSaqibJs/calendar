import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const myEventsList = [
    {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1)
    }
]

const localized = momentLocalizer(moment);

const MyCalendar = props => (
    <div>
        <Calendar
            localizer={localized}
            events={myEventsList}
            defaultView='month'
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    </div>
)

export default MyCalendar;