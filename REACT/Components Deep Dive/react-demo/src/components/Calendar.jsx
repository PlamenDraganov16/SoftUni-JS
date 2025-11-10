import { useState } from "react";

// const days = [
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//     'sunday',
// ];

export default function Calendar() {
    const [day, setDay] = useState(0);

    const nextDayClickHandler = () => {
        setDay(state => state + 1);
    };

    const resetDayClickHandler = () => {
        setDay(0);
    };

    let currentDay;

    switch (day) {
        case 0:
            currentDay = <strong>monday</strong>
            break;
        case 1:
            currentDay = 'tuesday'
            break;
        case 2:
            currentDay = 'wednesday'
            break;
        case 3:
            currentDay = 'thursday'
            break;
        case 4:
            currentDay = 'friday'
            break;
        case 5:
            currentDay = 'saturday'
            break;
        case 6:
            currentDay = 'sunday'
            break;

    }

    if (day > 6) {
        return (
            <section>
                <h2>Calendar</h2>

                <h2>Invalid day.</h2>

                <button onClick={resetDayClickHandler}>Reset day</button>
            </section>
        )
    }

    const isWorkDay = day < 5;

    // isWorkDay && 'Pesho' truthy && any -> any
    // isWorkDay && 'Pesho' falsy && any -> falsy
    // isWorkDay || 'Pesho' truthy || any -> truthy
    // isWorkDay || 'Pesho' falsy || any -> any

    return (
        // <section>
        //     <h2>Calendar</h2>
        //     <div>Current day: {days.at(day)}</div>
        //     <button onClick={nextDayClickHandler}>Next day</button>
        // </section>

        <section>
            <h2>Calendar</h2>
            <h3>{isWorkDay
                ? <span>Workday</span>
                : <span>Weekend</span>}
            </h3>  {/*//Conditional Rendering */}
            <div>Current day: {currentDay}</div>

            <div>
                <h3>Work Schedule</h3>
                {isWorkDay && (
                    <ul>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </ul>
                )}
            </div>
            <button onClick={nextDayClickHandler}>Next day</button>
        </section>
    );
}