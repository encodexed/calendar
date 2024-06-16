import { IEvent } from "../../services/interfaces";
import styles from "./EventInfo.module.scss";

type Props = {
	data: IEvent;
};

const EventInfo = ({ data }: Props) => {
	/* If no event selected */
	if (!data) {
		return (
			<div className={styles.no_event}>
				<h2>Select an event.</h2>
			</div>
		);
	}

	return (
		<div className={styles.event_info}>
			<h2>{data.title}</h2>
		</div>
	);
};

export default EventInfo;
