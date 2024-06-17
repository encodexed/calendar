import { CalendarContext } from "../../context/CalendarContextProvider";
import { IEvent } from "../../services/interfaces";
import { getDateOfCalendarIndex } from "../../services/scripts";
import EventCard from "../EventCard/EventCard";
import styles from "./DayInfo.module.scss";
import { useContext, useEffect, useState } from "react";

const DayInfo = () => {
	const { selectedDay, events } = useContext(CalendarContext);
	const [eventsToday, setEventsToday] = useState<IEvent[]>([]);
	const [todayDate, setTodayDate] = useState<string>("");

	useEffect(() => {
		setTodayDate(getDateOfCalendarIndex(selectedDay).toDateString());
	}, [selectedDay]);

	useEffect(() => {
		const relevantEvents: IEvent[] = [];
		events.forEach((ev) => {
			if (ev.startDT.toDateString() === todayDate) {
				relevantEvents.push(ev);
			}
		});
		setEventsToday(relevantEvents);
	}, [events, todayDate]);

	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.day_summary}>
					<h3>{todayDate}</h3>
					<button className={styles.day_summary_add_event}>Add Event</button>
				</div>
				<div className={styles.day_events}>
					{eventsToday.length > 0 &&
						eventsToday.map((eve) => {
							return <EventCard key={eve.id} event={eve} />;
						})}
					{eventsToday.length == 0 && (
						<div className={styles.footer_empty}>
							<h3>No events on this day.</h3>
						</div>
					)}
				</div>
			</footer>
		</>
	);
};

export default DayInfo;
