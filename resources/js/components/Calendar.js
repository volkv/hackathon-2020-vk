import React from 'react';
import HorizontalCalendar from "../vendor/HorizontalCalendar";

const Calendar = () => {

    return (

        <HorizontalCalendar
            date={new Date("2020-9-17")}
            choosed={2}
            onClick={({choosedDay, dayNumber}) => {
                console.log(choosedDay + ' ' + dayNumber)
            }}
        />
    )
}


export default Calendar
