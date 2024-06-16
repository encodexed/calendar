import Calendar from "../Calendar/Calendar";
import EventInfo from "../EventInfo/EventInfo";
import styles from "./MidSection.module.scss";

const MidSection = () => {
	return (
		<main className={styles.main}>
			<Calendar />
			<aside className={styles.main_event}>
				<EventInfo />
			</aside>
		</main>
	);
};

export default MidSection;
