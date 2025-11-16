import type { JSX } from "react";
import styles from './style.module.css'
import Card from "../card/card";

import doctors from '/doctors.svg'
import treatment from '/treatment.svg'
import bed from '/bed.svg'
import microscope from '/microscope.svg'

export default function Grid(): JSX.Element {
    return (
        <div className={styles.grid}>
            <Card img={doctors} imagePadding={20}
                  title="Experienced Specialists" 
                  description="Our doctors bring 20+ years of combined expertise across multiple disciplines." />
            <Card img={treatment} imagePadding={15}
                  title="Trusted by 10,000+ Patients"
                  description="Join over 10,000 patients who’ve chosen us for compassionate, expert healthcare."/>
            <Card img={bed} imagePadding={20}
                  title="24x7 Care Top Facilities" 
                  description="From preventive care to emergency support, we’re here 24×7 with compassion, technology, and trust."/>
            <Card img={microscope} imagePadding={35}
                  title="Advanced Diagnostics 🧬" 
                  description="Accurate results powered by modern technology for faster, better treatment decisions."/>
        </div>
    );
}