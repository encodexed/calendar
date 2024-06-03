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
