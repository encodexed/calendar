import { ICalendarDay } from "../../services/interfaces";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import styles from "./DayCard.module.scss";

type Props = {
	data: ICalendarDay;
	index: number;
};

// const monthNames = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December",
// ];

const DayCard = ({ data, index }: Props) => {
	const date = data.date.getDate();
	// const month = monthNames[data.date.getMonth()];
	// const year = data.date.getFullYear();

	return (
		<div className={styles.card}>
			<div className={styles.card_header}>{date}</div>
			<div
				className={styles.card_events}
				onClick={() => {
					console.log("clicked an event");
				}}
			>
				{data.events.map((ev) => {
					return (
						<CalendarEvent key={ev.id} time={ev.startDT} title={ev.title} />
					);
				})}
			</div>
		</div>
	);
};

export default DayCard;
