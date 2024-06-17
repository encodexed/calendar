import { createContext, useState } from "react";
import { CalendarCtx, IEvent } from "../services/interfaces";

// ! These events are entered into GMT, so they may appear on the wrong days
// TODO Fix event timezones
// TODO When rendering calendar cards, give them an ID that can be used to read what the date is
const initEventState: IEvent[] = [
	{
		id: 1,
		category: "work",
		title: "Meeting with Karen",
		startDT: new Date("June 12, 2024 11:15:00"),
		finishDT: new Date("June 12, 2024 11:45:00"),
		location: "Remote",
		body: "Don't forget to download the finance reports before the meeting.",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 2,
		category: "work",
		title: "Conference Call with Martin",
		startDT: new Date("June 30, 2024 12:15:00"),
		finishDT: new Date("June 30, 2024 12:45:00"),
		location: "Remote",
		body: "Zoom link dfbdfadkjfha",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 3,
		category: "work",
		title: "Fire Derek",
		startDT: new Date("June 13, 2024 15:15:00"),
		finishDT: new Date("June 13, 2024 15:30:00"),
		location: "64 Cardigan St, Stanmore NSW 2048",
		body: "Be as quick as possible.",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 4,
		category: "work",
		title: "Pick up groceries",
		startDT: new Date("June 19, 2024 17:15:00"),
		finishDT: new Date("June 19, 2024 17:30:00"),
		location: "Wolli Creek Woolworths",
		body: "Pick up code: NH4A",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 5,
		category: "work",
		title: "Vet visit",
		startDT: new Date("June 22, 2024 09:15:00"),
		finishDT: new Date("June 22, 2024 10:30:00"),
		location: "Birds & Exotics Veterinarian Alexandria",
		body: "Beemo, Midori and Pippin need their annual health checkup",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 6,
		category: "work",
		title: "Date night",
		startDT: new Date("June 25, 2024 18:30:00"),
		finishDT: new Date("June 26, 2024 00:00:00"),
		location: "Home",
		body: "A nice dinner and a movie out with the other human.",
		isRecurring: false,
		recurInterval: "none",
	},
	{
		id: 7,
		category: "work",
		title: "Present to Shareholders",
		startDT: new Date("June 30, 2024 14:30:00"),
		finishDT: new Date("June 30, 2024 15:30:00"),
		location: "Remote",
		body: "Zoom link dfbdfadkjfha",
		isRecurring: false,
		recurInterval: "none",
	},
];

export const CalendarContext = createContext<CalendarCtx>({
	events: initEventState,
	updateEvents: () => {},
	selectedDay: 90,
	selectDay: () => {},
	selectedEvent: null,
	selectEvent: () => {},
});

const CalendarContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [events, setEvents] = useState<IEvent[]>(initEventState);
	const [selectedDay, setSelectedDay] = useState<number>(90);
	const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

	// Does nothing for now
	const updateEvents = () => {
		setEvents([]);
	};

	const selectDay = (day: number) => {
		setSelectedDay(day);
	};

	const selectEvent = (event: IEvent) => {
		setSelectedEvent(event);
	};

	return (
		<CalendarContext.Provider
			value={{
				events,
				updateEvents,
				selectedDay,
				selectDay,
				selectedEvent,
				selectEvent,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export default CalendarContextProvider;
