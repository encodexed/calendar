import { CalendarContext } from "../../context/CalendarContextProvider";
import { IEvent } from "../../services/interfaces";
import { getDateOfCalendarIndex } from "../../services/scripts";
import EventCard from "../EventCard/EventCard";
import styles from "./DayInfo.module.scss";
import { useContext, useEffect, useState } from "react";

const DayInfo = () => {
	const { selectedDay, events } = useContext(CalendarContext);
	const [eventsToday, setEventsToday] = useState<IEvent[]>([]);

	useEffect(() => {
		const relevantEvents: IEvent[] = [];
		const todayDate = getDateOfCalendarIndex(selectedDay).toDateString();
		events.forEach((ev) => {
			if (ev.startDT.toDateString() === todayDate) {
				relevantEvents.push(ev);
			}
		});
		setEventsToday(relevantEvents);
	}, [selectedDay, events]);

	return (
		<>
			<footer className={styles.footer}>
				{eventsToday.length > 0 &&
					eventsToday.map((eve) => {
						return <EventCard key={eve.id} />;
					})}
				{eventsToday.length == 0 && (
					<div className={styles.footer_empty}>No events for today.</div>
				)}
			</footer>
		</>
	);
};

export default DayInfo;
