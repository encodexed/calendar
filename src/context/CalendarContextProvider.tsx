import { createContext, useState } from "react";
import { CalendarCtx, IEvent } from "../services/interfaces";

// ! These events are entered into GMT, so they may appear on the wrong days
const initEventState: IEvent[] = [
	{
		id: 1,
		category: "work",
		title: "Meeting with Karen",
		startDT: new Date("June 1, 2024 11:15:00"),
		finishDT: new Date("June 1, 2024 11:45:00"),
		location: "Remote",
		body: "Don't forget to download the finance reports before the meeting.",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 2,
		category: "work",
		title: "Conference Call with Martin",
		startDT: new Date("June 1, 2024 12:15:00"),
		finishDT: new Date("June 1, 2024 12:45:00"),
		location: "Remote",
		body: "Zoom link dfbdfadkjfha",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 3,
		category: "work",
		title: "Fire Derek",
		startDT: new Date("June 3, 2024 15:15:00"),
		finishDT: new Date("June 3, 2024 15:30:00"),
		location: "64 Cardigan St, Stanmore NSW 2048",
		body: "Be as quick as possible.",
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
