import { useContext } from "react";
import styles from "./CalendarEvent.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { IEvent } from "../../services/interfaces";

type Props = {
	event: IEvent;
};

const CalendarEvent = ({ event }: Props) => {
	const { selectEvent } = useContext(CalendarContext);

	const hour = event.startDT.getHours();
	const mins = event.startDT.getMinutes();
	const eventTime = `${hour}:${mins}`;

	const clickHandler = () => {
		selectEvent(event);
	};

	return (
		<div className={styles.event} onClick={clickHandler}>
			<div className={styles.time}>{eventTime}</div>
			<div className={styles.title}>{event.title}</div>
		</div>
	);
};

export default CalendarEvent;
