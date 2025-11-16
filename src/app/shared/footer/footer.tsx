import type { JSX } from "react";
import styles from './style.module.css';

export default function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} <b>ExplorInfinity</b></p>
            <p>Designed and created by <b>Aditya Singla</b></p>
        </footer>
    );
}