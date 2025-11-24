import { useEffect, useRef, type JSX } from "react";
import styles from './style.module.css'
import DoctorCard from "./doctorCard/doctorCard";

export default function FindDoctor(): JSX.Element {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <dialog ref={dialogRef} className={styles.main_section}>
            <h1>Find Our Doctors</h1>

            <div className={styles.inputContainer}>
                <label>
                    Need help finding a particular doctor?
                    <input type="text" placeholder="Search by condition, speciality or doctor's name" />
                </label>
            </div>

            <div className={styles.results}>
                <DoctorCard 
                    name="Adarsh Balu" 
                    degrees={[ "MD", "PhD" ]} 
                    rating={1.1}
                    totalRatings={669}
                    totalReviews={69}
                    specialities={[ "Heart Failure" ]}
                />
                <DoctorCard 
                    name="Nitesh Kumar" 
                    degrees={[ "MD" ]} 
                    rating={2.1}
                    totalRatings={600}
                    totalReviews={60}
                    specialities={[ "Heart Attack" ]}
                />
            </div>

        </dialog>
    );
}