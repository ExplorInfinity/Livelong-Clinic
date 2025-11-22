import type { JSX } from "react";
import styles from './style.module.css'
import rightArrowSvg from '/src/assets/rightArrow.svg'
import ColorFillBtn from "../../../../components/color_fill_btn/btn";

export default function HeroSection(): JSX.Element {
    return (
        <div className={styles.heroSection}>
            <div className={styles.titleSection}>
                <h1 className={styles.main_quote}>Empowering you to Livelong — and live better.</h1>
                <ColorFillBtn text="Get Appointment" svg={rightArrowSvg} styleVariables={{ 
                    backgroundColor: "hsl(195, 75%, 40%)", 
                    transitionDuration: 300,
                    width: 180,
                    hoverWidth: 195
                }} />
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