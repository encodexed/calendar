import styles from "./EventInfo.module.scss";
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";

const EventInfo = () => {
	const { selectedEvent } = useContext(CalendarContext);

	/* If no event selected */
	if (!selectedEvent) {
		return (
			<div className={styles.no_event}>
				<h2>Select an event.</h2>
			</div>
		);
	}

	const { title, startDT, finishDT, body, location } = selectedEvent;

	return (
		<div className={styles.event_info}>
			<div className={styles.event_content}>
				<h2>{title}</h2>
				<strong className={styles.event_time}>
					{startDT.toTimeString().substring(0, 5)} -{" "}
					{finishDT.toTimeString().substring(0, 5)}
				</strong>
				<p>{location}</p>
				<p>{body}</p>
			</div>
			<div className={styles.event_actions}>
				<button className={styles.event_actions_edit}>Edit Event</button>
				<button className={styles.event_actions_delete}>Delete Event</button>
			</div>
		</div>
	);
};

export default EventInfo;
