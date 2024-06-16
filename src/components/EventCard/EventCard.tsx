import { useContext } from "react";
import { IEvent } from "../../services/interfaces";
import styles from "./EventCard.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";

type Props = {
	event: IEvent;
};

const EventCard = ({ event }: Props) => {
	const { title, startDT, finishDT, location } = event;
	const { selectEvent } = useContext(CalendarContext);

	const clickHandler = () => {
		selectEvent(event);
	};

	return (
		<div className={styles.event_card} onClick={clickHandler}>
			<h3 className={styles.event_card_title}>{title}</h3>
			<p>
				{startDT.toTimeString().substring(0, 5)} -{" "}
				{finishDT.toTimeString().substring(0, 5)}
			</p>
			<p>{location}</p>
		</div>
	);
};

export default EventCard;
