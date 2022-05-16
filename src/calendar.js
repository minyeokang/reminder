import React from 'react';
import Year from "react-live-clock";
import Month from "react-live-clock";
import Clock from "react-live-clock";
function Calendar() {
    return (
        <div className="Year-Month">



            <span className="Day">
                <Clock format={"YYYY MMM DD HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
            </span>

        </div>
    );
}

export default Calendar;