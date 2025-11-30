import type {JSX} from 'react'
import styles from './style.module.css'

type HeaderProps = {
    showLoginForm: () => void
    showFindDoctorsPage: () => void
}

export default function Header({ showLoginForm, showFindDoctorsPage } : HeaderProps): JSX.Element {
    return (
        <header className={styles.header}>
            <h1 className={styles.website_name}>Livelong Clinic</h1>
            <nav className={styles.navbar}>
                <ul className={styles.navbar_list}>
                    <li>
                        <a>Home</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                    <li>
                        <a href='#locations'>Locations</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                    <li onClick={showFindDoctorsPage}>
                        <a>Departments</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                    <li onClick={showLoginForm}>
                        <a>Appointments</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}