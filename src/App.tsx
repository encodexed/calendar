import styles from "./App.module.scss";
import DayInfo from "./components/DayInfo/DayInfo";
import MidSection from "./components/MidSection/MidSection";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	return (
		<div className={styles.app}>
			<NavBar />
			<MidSection />
			<DayInfo />
		</div>
	);
};

export default App;
