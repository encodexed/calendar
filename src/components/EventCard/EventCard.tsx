import { IEvent } from "../../services/interfaces";
import styles from "./EventCard.module.scss";

type Props = {
	data: IEvent;
};

const EventCard = ({ data }: Props) => {
	const { title, startDT, finishDT, location } = data;

	return (
		<div className={styles.event_card}>
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
