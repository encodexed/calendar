import styles from "./DayContent.module.scss";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import { ICalendarDay } from "../../services/interfaces";

type Props = {
	data: ICalendarDay;
};

const DayContent = ({ data }: Props) => {
	const date = data.date.getDate();

	return (
		<>
			<div className={styles.content_header}>{date}</div>
			<div className={styles.content_events}>
				{data.events.map((ev) => {
					return <CalendarEvent key={ev.id} event={ev} />;
				})}
			</div>
		</>
	);
};

export default DayContent;
