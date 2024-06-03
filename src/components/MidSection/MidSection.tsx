import Calendar from "../Calendar/Calendar";
import styles from "./MidSection.module.scss";

const MidSection = () => {
	return (
		<main className={styles.main}>
			<Calendar />
			<aside className={styles.main_event}>Event Info</aside>
		</main>
	);
};

export default MidSection;
