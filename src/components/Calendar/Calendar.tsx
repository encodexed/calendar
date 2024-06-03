import { useState, useContext, useEffect } from "react";
import styles from "./Calendar.module.scss";
import { ICalendarDay } from "../../services/interfaces";
import { getCalendarDays } from "../../services/scripts";
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
	console.log({ events });

	const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>(
		getCalendarDays()
	);

	useEffect(() => {
		setCalendarDays((prev) => {
			const newCalendar = [...prev];
			const earliest: Date = newCalendar[0].date;
			events.forEach((ev) => {
				const dateEv = new Date(ev.startDT.toUTCString());
				const dateEarl = new Date(earliest.toUTCString());
				const diff = +dateEv - +dateEarl;
				const daysDiff = Math.floor(Math.round(diff / 1000) / 60 / 60 / 24);

				// check if event already exists
				let duplicateFound = false;
				newCalendar[daysDiff].events.forEach((eve) => {
					if (ev.id === eve.id) duplicateFound = true;
				});

				if (!duplicateFound) {
					console.log("pushing an event to calendar");
					newCalendar[daysDiff].events.push(ev);
				}
			});

			return newCalendar;
		});
	}, [events]);

	return (
		<section className={styles.calendar}>
			{calendarDays.map((day) => {
				return <DayCard key={day.date.toISOString()} data={day} />;
			})}
		</section>
	);
};

export default Calendar;
