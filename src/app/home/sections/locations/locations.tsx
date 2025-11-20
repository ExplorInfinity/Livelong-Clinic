import type { JSX } from "react";
import styles from './style.module.css'
import LocationCard from "./locationCard/locationCard";
import locationA from '/src/assets/locationA.png'
import locationB from '/src/assets/locationB.png'
import locationC from '/src/assets/locationC.jpeg'
import locationD from '/src/assets/locationD.png'

const images: string[] = [locationA, locationB, locationC, locationD];
export default function Locations(): JSX.Element {
    const cards = images.map(src => <LocationCard imgsrc={src} />)
    return (
        <div className={styles.locations}>
            <h1>Locations</h1>
            <div className={styles.locationCards}>
                { ...cards }
            </div>
        </div>
    );
}