import { ICalendarDay } from "../../services/interfaces";
import styles from "./DayCard.module.scss";

type Props = {
	data: ICalendarDay;
};

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const DayCard = ({ data }: Props) => {
	const date = data.date.getDate();
	const month = monthNames[data.date.getMonth()];
	const year = data.date.getFullYear();

	if (date == 1) {
		if (month == "January") {
			return (
				<div className={styles.card}>
					<p>
						{date} January {year}
					</p>
				</div>
			);
		}
		return (
			<div className={styles.card}>
				<p>
					{date} {month}
				</p>
			</div>
		);
	}

	return (
		<div className={styles.card}>
			<p>{date}</p>
		</div>
	);
};

export default DayCard;
