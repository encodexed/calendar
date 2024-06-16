import styles from "./NavBar.module.scss";
import icon from "../../assets/calendar-icon.svg";

const NavBar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.nav_left}>
					<img className={styles.icon} src={icon} alt='icon' />
					<h2>Calendar</h2>
				</div>
				<div className={styles.nav_right}>
					<a href='#'>Home</a>
					<a href='#'>Settings</a>
					<a href='#'>Logout</a>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
