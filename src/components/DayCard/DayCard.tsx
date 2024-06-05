import { ICalendarDay } from "../../services/interfaces";
import styles from "./DayCard.module.scss";

type Props = {
	data: ICalendarDay;
	index: number;
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

const DayCard = ({ data, index }: Props) => {
	const date = data.date.getDate();
	const month = monthNames[data.date.getMonth()];
	const year = data.date.getFullYear();

	if (index === 0) {
		return (
			<div className={styles.card}>
				<p>
					{date} {month} {year}
				</p>
				{data.events.map((ev) => {
					return <p key={ev.id}>{ev.title}</p>;
				})}
			</div>
		);
	}

	// If start of month or year
	if (date == 1) {
		if (month == "January") {
			return (
				<div className={styles.card}>
					<p>
						{date} January {year}
					</p>
					{data.events.map((ev) => {
						return <p key={ev.id}>{ev.title}</p>;
					})}
				</div>
			);
		}
		return (
			<div className={styles.card}>
				<p>
					{date} {month}
				</p>
				{data.events.map((ev) => {
					return <p key={ev.id}>{ev.title}</p>;
				})}
			</div>
		);
	}

	return (
		<div className={styles.card}>
			<p>{date}</p>
			{data.events.map((ev) => {
				return <p key={ev.id}>{ev.title}</p>;
			})}
		</div>
	);
};

export default DayCard;
