import { createContext, useState } from "react";
import { CalendarCtx, CalendarEvent } from "../services/interfaces";

export const CalendarContext = createContext<CalendarCtx>({
	events: [],
	updateEvents: () => {},
});

const CalendarContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [events, setEvents] = useState<CalendarEvent[]>([]);

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
