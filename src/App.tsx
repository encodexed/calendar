import styles from "./App.module.scss";
import DayInfo from "./components/DayInfo";
import MidSection from "./components/MidSection";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div className={styles.app}>
			<header>
				<NavBar />
			</header>
			<main>
				<MidSection />
			</main>
			<footer>
				<DayInfo />
			</footer>
		</div>
	);
};

export default App;
