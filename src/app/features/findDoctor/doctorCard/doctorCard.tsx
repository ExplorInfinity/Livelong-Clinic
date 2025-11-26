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

    const specialitiesList: Array<JSX.Element> = specialities.map((s: string): JSX.Element => <li>{s}</li>);

    return (
        <div className={styles.results}>
            <div className={styles.doctorCard}>
                <img src={imgsrc} alt="Photo" />
                <div className={styles.details}>
                    <p className={styles.name}>{name}{...degrees.map(d => ", " + d)} { expelled && <span className={styles.expelled}>Expelled</span> }</p>
                    <p className={styles.rating}>
                        <span className={styles.ratingStars}>{starTypes[0].repeat(Math.round(rating))}</span> 
                        {starTypes[1].repeat(5 - Math.round(rating))} {rating} of 5 stars | <span>{totalRatings} Ratings, {totalReviews} Reviews</span>
                    </p>
                    <p className={styles.specialityHeading}>Specialities</p>
                    <ul className={styles.specialities}>
                        { ...specialitiesList }
                    </ul>
                </div>
            </div>
        </div>
    );
}