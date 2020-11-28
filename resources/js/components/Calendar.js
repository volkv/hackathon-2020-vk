import React, {useContext} from 'react';
import HorizontalCalendar from "../vendor/HorizontalCalendar";
import DateTime from 'luxon/src/datetime.js';
import {RouterContext} from '../App';

const calculateFilterDate = day => {
    const middleWeek = 4;
    const dt = DateTime.local().set({hour: 0, minute: 0, second: 0, millisecond: 0});
    if(day === middleWeek){
        return dt.toSeconds();
    }
    if(day<middleWeek){
        return dt.minus({day: middleWeek-day}).toSeconds();
    }
    if(day>middleWeek){
        return dt.plus({day: day-middleWeek}).toSeconds();
    }
};

const Calendar = () => {
    const {setDate, chosen, setChosen} = useContext(RouterContext);
    const neededDate = DateTime.local().minus({days: 3});

    return (
        <HorizontalCalendar
            date={neededDate.toJSDate()}
            choosed={chosen}
            onClick={({dayNumber}) => {
                setChosen(dayNumber);
                setDate(calculateFilterDate(dayNumber));
            }}
            isDarkWeekend={false}
        />
    )
};


export default Calendar;
