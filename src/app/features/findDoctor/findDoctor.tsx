import { useEffect, useRef, type JSX } from "react";
import styles from './style.module.css';
import DoctorCard, { type DoctorCardProps } from "./doctorCard/doctorCard";
import data from '../../../assets/doctors.json';

export default function FindDoctor(): JSX.Element {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    const doctorCards: Array<JSX.Element> = data.doctors.map((d: DoctorCardProps): JSX.Element => <DoctorCard { ...d } />);

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
                { ...doctorCards }
            </div>

        </dialog>
    );
}