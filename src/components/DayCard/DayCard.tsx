import { useEffect, useRef, useContext } from "react";
import { ICalendarDay } from "../../services/interfaces";
import styles from "./DayCard.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";
import DayContent from "../DayContent/DayContent";

type Props = {
	data: ICalendarDay;
	index: number;
};

const DayCard = ({ data, index }: Props) => {
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
				<DayContent data={data} />
			</div>
		);
	}

	/* If this day is selected */
	if (index == selectedDay) {
		return (
			<div
				className={styles.card_selected}
				ref={todayRef}
				onClick={clickHandler}
			>
				<DayContent data={data} />
			</div>
		);
	}

	return (
		<div className={styles.card} ref={todayRef} onClick={clickHandler}>
			<DayContent data={data} />
		</div>
	);
};

export default DayCard;
