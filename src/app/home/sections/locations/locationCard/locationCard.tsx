import type { JSX } from 'react'
import styles from './style.module.css'

type LocationCardProps = {
    imgsrc: string
}

export default function LocationCard({ imgsrc }: LocationCardProps): JSX.Element {
    return (
        <div className={styles.card}>
            <img src={imgsrc} alt="Location A" />
        </div>
    )
}