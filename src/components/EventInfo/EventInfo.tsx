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

	return (
		<div className={styles.event_info}>
			<h2>{selectedEvent.title}</h2>
		</div>
	);
};

export default EventInfo;
