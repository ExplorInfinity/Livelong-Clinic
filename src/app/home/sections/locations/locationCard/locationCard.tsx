import type { JSX } from 'react'
import styles from './style.module.css'
import locationPinSvg from '/src/assets/locationPin.svg'

type LocationCardProps = {
    imgsrc: string
    location?: string
}

export default function LocationCard({ imgsrc, location }: LocationCardProps): JSX.Element {
    return (
        <div className={styles.card}>
            <img className={styles.locationImg} src={imgsrc} alt="Location A" />
            <div className={styles.backdrop}></div>
            <div className={styles.locationTag}>
                <img src={locationPinSvg} alt="location" />
                {location}
            </div>
        </div>
    )
}