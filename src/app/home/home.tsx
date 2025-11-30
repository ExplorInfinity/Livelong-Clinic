import type { JSX } from "react";
import HeroSection from "./sections/heroSection/heroSection";
import FeatureBar from "./sections/featureBar/featureBar";
import FeatureGrid from "./sections/featureGrid/featureGrid";
import Locations from "./sections/locations/locations";

type HomePageProps = {
    showLoginForm: () => void
}

export default function Home({ showLoginForm } : HomePageProps): JSX.Element {

    return (
        <main>
            <HeroSection showLoginForm={ showLoginForm } />
            <FeatureBar />
            <FeatureGrid />
            <Locations />
        </main>
    );
}