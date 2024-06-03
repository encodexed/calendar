export interface ICalendarDay {
	date: Date;
	events: IEvent[];
}

export interface IEvent {
	id: number;
	category: string;
	title: string;
	startDT: Date;
	finishDT: Date;
	location: string;
	body: string;
	isRecurring: boolean;
	recurInterval: string;
}

export interface CalendarCtx {
	events: IEvent[];
	updateEvents: () => void;
}
