import type { JSX } from "react";
import styles from './style.module.css'
// import ambulance from '/ambulance.svg'

export default function FeatureBar(): JSX.Element {

    return(
        <div className={styles.container}>
            <div className={styles.section}>
                {/* <img className={styles.svg} src={ambulance}></img> */}
                <h1>24x7 Emergency Support</h1>
                <h3>Helpline No. +91 XXX-XXX-XXXX</h3>
            </div>
            <div className={styles.vr}></div>
            <div className={styles.section}>
                <h1>24x7 Emergency Support</h1>
                <h3>Helpline No. +91 XXX-XXX-XXXX</h3>
            </div>
            <div className={styles.vr}></div>
            <div className={styles.section}>
                <h1>24x7 Emergency Support</h1>
                <h3>Helpline No. +91 XXX-XXX-XXXX</h3>
            </div>
        </div>
    );
}