import type {JSX} from 'react'
import styles from './style.module.css'

type HeaderProps = {
    toggleLoginForm: () => void
}

export default function Header({ toggleLoginForm } : HeaderProps): JSX.Element {
    return (
        <header className={styles.header}>
            <h1 className={styles.website_name}>Livelong Clinic</h1>
            <nav className={styles.navbar}>
                <ul className={styles.navbar_list}>
                    <li>
                        <a href="/">Home</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                    <li>
                        <a href="/locations">Locations</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                    <li>
                        <a href="/departments">Departments</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                    <li>
                        <a onClick={toggleLoginForm} target="_self" href="#">Appointments</a>
                        <div className={styles.hoverBar}></div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}