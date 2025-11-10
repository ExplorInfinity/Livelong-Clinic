import type { JSX } from "react";
import HeroSection from "./heroSection/heroSection";
import FeatureBar from "./featureBar/featureBar";
import Grid from "../grid/grid";
// import styles from './style.module.css'

export default function Main(): JSX.Element {
    return (
        <main>

            <HeroSection />
            <FeatureBar />
            <Grid />

        </main>
    );
}