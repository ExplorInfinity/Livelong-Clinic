import type { JSX } from "react";
import styles from './style.module.css'
import LocationCard from "./locationCard/locationCard";
import locationA from '/src/assets/locationA.png'
import locationB from '/src/assets/locationB.png'
import locationC from '/src/assets/locationC.jpeg'
import locationD from '/src/assets/locationD.png'

type Location = {
    imgsrc: string
    location: string
}

const locations: Location[] = [
    { imgsrc: locationA, location: "Chandigarh" }, 
    { imgsrc: locationB, location: "Delhi" }, 
    { imgsrc: locationC, location: "Mumbai" }, 
    { imgsrc: locationD, location: "Kolkata" }
];

export default function Locations(): JSX.Element {
    const cards = locations.map(e => <LocationCard imgsrc={e.imgsrc} location={e.location} />)
    return (
        <div className={styles.locations}>
            <h1>Locations</h1>
            <div className={styles.locationCards}>
                { ...cards }
            </div>
        </div>
    );
}