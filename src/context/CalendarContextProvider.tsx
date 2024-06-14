import { createContext, useState } from "react";
import { CalendarCtx, IEvent } from "../services/interfaces";

const initEventState: IEvent[] = [
	{
		id: 1,
		category: "work",
		title: "Meeting with Karen",
		startDT: new Date("June 1, 2024 11:15:00"),
		finishDT: new Date("June 1, 2024 12:45:00"),
		location: "Remote",
		body: "Don't forget to download the finance reports before the meeting.",
		isRecurring: false,
		recurInterval: "none",
	},
];

export const CalendarContext = createContext<CalendarCtx>({
	events: initEventState,
	updateEvents: () => {},
	selectedDay: 90,
	selectDay: () => {},
});

const CalendarContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [events, setEvents] = useState<IEvent[]>(initEventState);
	const [selectedDay, setSelectedDay] = useState<number>(90);

	// Does nothing for now
	const updateEvents = () => {
		setEvents([]);
	};

	const selectDay = (day: number) => {
		setSelectedDay(day);
	};

	return (
		<CalendarContext.Provider
			value={{
				events,
				updateEvents,
				selectedDay,
				selectDay,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export default CalendarContextProvider;
