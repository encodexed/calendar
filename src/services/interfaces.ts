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
