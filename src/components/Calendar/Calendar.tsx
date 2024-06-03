import { useState } from "react";
import styles from "./Calendar.module.scss";
import { ICalendarDay } from "../../services/interfaces";
import { getCalendarDays } from "../../services/scripts";

// get today's date
// get the date 3 months ago
// get the date 3 years in advance
// check list of events called in from the server, and attach those events to the days
// render cards from 3 months prior to 3 years in advance
// highlight and focus (in state and css) today's card

const Calendar = () => {
	const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>(
		getCalendarDays()
	);

	return (
		<section className={styles.calendar}>
			{calendarDays.map((day) => {
				return <div key={day.date.toISOString()}>{day.date.toISOString()}</div>;
			})}
		</section>
	);
};

export default Calendar;
