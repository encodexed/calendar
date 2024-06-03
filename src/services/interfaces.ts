export interface ICalendarDay {
	date: Date;
	events: IEvent[];
}

export interface IEvent {
	title: string;
	startDT: Date;
	finishDT: Date;
	location: string;
	body: string;
	isRecurring: boolean;
	recurInterval: string;
}

export interface CalendarCtx {
	events: CalendarEvent[];
	updateEvents: () => void;
}

export interface CalendarEvent {
	category: string;
	title: string;
	startDT: Date;
	finishDT: Date;
	location: string;
	body: string;
}
