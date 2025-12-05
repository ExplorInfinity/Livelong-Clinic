import type { JSX } from 'react';
import styles from './style.module.css'
import unknown from '/src/assets/unknown.svg'

export type DoctorCardProps = {
    imgsrc?: string
    name: string
    degrees: string[]
    rating: number
    totalRatings: number
    totalReviews: number
    specialities: string[]
    expelled?: boolean
}

const starTypes: string[] = ["★", "☆"];

export default function DoctorCard({ 
    imgsrc = unknown, name, degrees, rating, totalRatings, totalReviews, specialities, expelled = false
} : DoctorCardProps): JSX.Element {

    const degreesStr = degrees.map(d => ", " + d).join("");
    const starsToShow = Math.round(rating);
    const specialitiesList: Array<JSX.Element> = specialities.map((s: string): JSX.Element => <li>{s}</li>);

    return (
        <div className={styles.doctorCard}>

            <img src={imgsrc} alt="Photo" />

            <div className={styles.details}>

                <p className={styles.name}>
                    {name}{degreesStr} 
                    {expelled && <span className={styles.expelled}>Expelled</span>}
                </p>

                <p className={styles.rating}>
                    <span className={styles.ratingStars}>
                        {starTypes[0].repeat(starsToShow)}
                    </span> 
                    {starTypes[1].repeat(5 - starsToShow)} {rating} of 5 stars | {" "}
                    <span className={styles.reviews}>{totalRatings} Ratings, {totalReviews} Reviews</span>
                </p>
                
                <div className={styles.specialities}>
                    Specialities
                    <ul>{ ...specialitiesList }</ul>
                </div>
            </div>

        </div>
    );
}