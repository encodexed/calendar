import { ICalendarDay, IEvent } from "./interfaces";

export const getCalendarDays = () => {
	const daysArr = [];
	const past = new Date();
	past.setDate(past.getDate() - 90);

	for (let i = -90; i < 740; i++) {
		const nextDate = new Date();
		nextDate.setDate(nextDate.getDate() + i);

		daysArr.push({
			date: nextDate,
			events: [],
		});
	}

	return daysArr;
};

export const makeCalendar = (
	newCal: ICalendarDay[],
	events: IEvent[]
): ICalendarDay[] => {
	const earliest: Date = newCal[0].date;
	// Assign events from database onto the days they occur
	events.forEach((ev) => {
		const dateEv = new Date(ev.startDT.toUTCString());
		const dateEarl = new Date(earliest.toUTCString());
		const diff = +dateEv - +dateEarl;
		const daysDiff = Math.floor(Math.round(diff / 1000) / 60 / 60 / 24);

		// check if event already exists
		let duplicateFound = false;
		newCal[daysDiff].events.forEach((eve) => {
			if (ev.id === eve.id) duplicateFound = true;
		});

		if (!duplicateFound) {
			newCal[daysDiff].events.push(ev);
		}
	});

	return newCal;
};

export const getDateOfCalendarIndex = (index: number) => {
	const day = new Date();
	const daysDiff = index - 90;
	day.setDate(day.getDate() + daysDiff);
	return day;
};
