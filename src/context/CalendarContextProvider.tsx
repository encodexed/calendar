import { createContext, useState } from "react";
import { CalendarCtx, IEvent } from "../services/interfaces";

export const CalendarContext = createContext<CalendarCtx>({
	events: [],
	updateEvents: () => {},
});

const CalendarContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [events, setEvents] = useState<IEvent[]>([
		{
			id: 1,
			category: "work",
			title: "Meeting with Karen",
			startDT: new Date("June 13, 2024 11:15:00"),
			finishDT: new Date("June 13, 2024 12:45:00"),
			location: "Remote",
			body: "Don't forget to download the finance reports before the meeting.",
			isRecurring: false,
			recurInterval: "none",
		},
	]);

	// Does nothing for now
	const updateEvents = () => {
		setEvents([]);
	};

	return (
		<CalendarContext.Provider
			value={{
				events,
				updateEvents,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export default CalendarContextProvider;
