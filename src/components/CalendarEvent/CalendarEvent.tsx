import styles from "./CalendarEvent.module.scss";

type Props = {
	time: Date;
	title: string;
};

const CalendarEvent = ({ time, title }: Props) => {
	const hour = time.getHours();
	const mins = time.getMinutes();
	const eventTime = `${hour}:${mins}`;

	return (
		<div className={styles.event}>
			<div className={styles.time}>{eventTime}</div>
			<div className={styles.title}>{title}</div>
		</div>
	);
};

export default CalendarEvent;
