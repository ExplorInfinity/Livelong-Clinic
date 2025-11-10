import type { JSX } from "react";
import styles from './style.module.css'

export default function FeatureBar(): JSX.Element {

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                <h1>24x7 Emergency Support</h1>
                <h3>Helpline No. 121</h3>
            </div>
            <div className={styles.vr}></div>
            <div className={styles.section}>
                <h1>OPD Timings</h1>
                <h3>Monday - Saturday → 9:00AM - 6:00PM</h3>
            </div>
            <div className={styles.vr}></div>
            <div className={styles.section}>
                <h1>Have Queries?</h1>
                <h3>Email us: inquiry@livelong.com</h3>
            </div>
        </div>
    );
}