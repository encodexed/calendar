import { useEffect, useRef, useContext } from "react";
import { ICalendarDay } from "../../services/interfaces";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import styles from "./DayCard.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";

type Props = {
	data: ICalendarDay;
	index: number;
};

const DayCard = ({ data, index }: Props) => {
	const date = data.date.getDate();
	const todayRef = useRef<HTMLDivElement>(null);
	const { selectDay, selectedDay } = useContext(CalendarContext);

	/* Scrolls to today's date */
	useEffect(() => {
		if (index == 80) todayRef.current?.scrollIntoView();
	}, [index]);

	/* Selecting a day */
	const clickHandler = () => {
		selectDay(index);
	};

	/* If day is today, highlight */
	if (index == 90) {
		return (
			<div className={styles.card_today} ref={todayRef} onClick={clickHandler}>
				<div className={styles.card_header}>{date}</div>
				<div className={styles.card_events}>
					{data.events.map((ev) => {
						return (
							<CalendarEvent key={ev.id} time={ev.startDT} title={ev.title} />
						);
					})}
				</div>
			</div>
		);
	}

	// If this day is selected
	if (index == selectedDay) {
		return (
			<div
				className={styles.card_selected}
				ref={todayRef}
				onClick={clickHandler}
			>
				<div className={styles.card_header}>{date}</div>
				<div className={styles.card_events}>
					{data.events.map((ev) => {
						return (
							<CalendarEvent key={ev.id} time={ev.startDT} title={ev.title} />
						);
					})}
				</div>
			</div>
		);
	}

	return (
		<div className={styles.card} ref={todayRef} onClick={clickHandler}>
			<div className={styles.card_header}>{date}</div>
			<div className={styles.card_events}>
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
