import type {JSX} from 'react'
import styles from './style.module.css'

export default function Header(): JSX.Element {
    console.log(styles);
    return (
        <header className={styles.header}>
            <h1 className={styles.website_name}>Livelong Clinic</h1>
            <nav className={styles.navbar}>
                <ul className={styles.navbar_list}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/locations">Locations</a></li>
                    <li><a href="/departments">Departments</a></li>
                    <li><a href="/appointments">Appointments</a></li>
                </ul>
            </nav>
        </header>
    );
}