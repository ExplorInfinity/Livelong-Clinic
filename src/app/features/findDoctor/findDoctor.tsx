import { useRef, useState, type JSX } from "react";
import styles from './style.module.css';
import DoctorCard, { type DoctorCardProps } from "./doctorCard/doctorCard";
import data from '../../../assets/doctors.json';

type FindDoctorProps = {
    forwardRef: React.RefObject<HTMLDialogElement | null>
}

export default function FindDoctor({ forwardRef } : FindDoctorProps): JSX.Element {
    const [doctors, setDoctors] = useState(data.doctors);
    const doctorCards: Array<JSX.Element> = doctors.map((d: DoctorCardProps): JSX.Element => <DoctorCard { ...d } />);

    const inputRef = useRef<HTMLInputElement>(null);

    function search(s: string) {
        if(s.length === 0) {
            setDoctors(() => data.doctors);
            return;
        }

        setDoctors((): DoctorCardProps[] =>
            data.doctors.filter((doctor: DoctorCardProps) => {
                if(doctor.expelled && "expelled".includes(s)) return true;

                for(const key of ["name", "specialities", "degrees"] as const) {
                    if((String(key) + String(doctor[key])).toLowerCase().includes(s)) return true;
                }
                return false;
            }));
    }

    let debouncer: ReturnType<typeof setTimeout>;
    function handleInputChange() {
        clearInterval(debouncer);
        debouncer = setTimeout(() => search(inputRef.current?.value.toLowerCase() ?? ""), 300);
    }

    return (
        <dialog ref={forwardRef} className={styles.main_section}>
            <button className={styles.closeBtn} onClick={() => forwardRef.current?.close()}>⛌</button>

            <h1>Find Our Doctors</h1>

            <div className={styles.inputContainer}>
                <label>
                    Need help finding a particular doctor?
                    <input ref={inputRef} onInput={handleInputChange} type="text" placeholder="Search by speciality or doctor's name" />
                </label>
            </div>

            <div className={styles.results}>
                { ...doctorCards }
            </div>

        </dialog>
    );
}