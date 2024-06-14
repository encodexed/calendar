import { useState, useContext, useEffect } from "react";
import styles from "./Calendar.module.scss";
import { ICalendarDay } from "../../services/interfaces";
import { getCalendarDays, makeCalendar } from "../../services/scripts";
import DayCard from "../DayCard/DayCard";
import { CalendarContext } from "../../context/CalendarContextProvider";

// get today's date
// get the date 3 months ago
// get the date 3 years in advance
// check list of events called in from the server, and attach those events to the days
// render cards from 3 months prior to 3 years in advance
// highlight and focus (in state and css) today's card

const Calendar = () => {
	const { events } = useContext(CalendarContext);

	const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>(
		getCalendarDays()
	);

	useEffect(() => {
		setCalendarDays((prev) => {
			const clonedCal = [...prev];
			const newCal = makeCalendar(clonedCal, events);
			return newCal;
		});
	}, [events]);

	return (
		<section className={styles.calendar}>
			{calendarDays.map((day, index) => {
				return (
					<DayCard key={day.date.toISOString()} data={day} index={index} />
				);
			})}
		</section>
	);
};

export default Calendar;
