import type { JSX } from "react";
import styles from './style.module.css';
import rightArrowSvg from '/src/assets/rightArrow.svg';
import doctorSmall from '/src/assets/doctorSmall.svg';
import hospitalSmall from '/src/assets/hospitalSmall.svg';

type HeroSectionProps = {
    showLoginForm: () => void
}

export default function HeroSection({ showLoginForm } : HeroSectionProps): JSX.Element {
    return (
        <div className={styles.heroSection}>
            <div className={styles.titleSection}>
                <div className={styles.quotes}>
                    <h1 className={styles.main_quote}>Biggest Clinics in India</h1>
                    <h2 className={styles.caption}>Empowering you to Livelong — and live better.</h2>
                </div>
                <div className={styles.highlightBox}>
                    <h4 className={styles.featureHeading}>Best class services</h4>
                    <ul className={styles.featureTable}>
                        <li><img src={doctorSmall} />Experienced doctors across specialties</li>
                        <li><img src={hospitalSmall} />24x7 emergency services and ambulances</li>
                    </ul>
                    <div className={styles.btns}>
                        <button className={styles.findDoctorsBtn}>Find Doctors <img src={rightArrowSvg} /></button>
                        <button onClick={showLoginForm} className={styles.getAppointmentBtn}>Get Appointment</button>
                    </div>
                    <p className={styles.certifiedTag}><span style={{color: "#F0AD4E"}}>★</span>4.9 (18k+ reviews)</p>
                </div>
            </div>
            <div className={styles.imageSection}>
                <div className={styles.imgContainer}></div>
                <div className={styles.backgroundBoxes}>
                    <div className={styles.floatingBox}></div>
                    <div className={styles.floatingBox}></div>
                </div>
            </div>
        </div>
    );
}