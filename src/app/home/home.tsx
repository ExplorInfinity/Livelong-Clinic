import type { JSX } from "react";
import HeroSection from "./sections/heroSection/heroSection";
import FeatureBar from "./sections/featureBar/featureBar";
import FeatureGrid from "./sections/featureGrid/featureGrid";
import Locations from "./sections/locations/locations";

type HomePageProps = {
    showLoginForm: () => void
    showFindDoctorsPage: () => void
}

export default function Home({ showLoginForm, showFindDoctorsPage } : HomePageProps): JSX.Element {

    return (
        <main>
            <HeroSection 
                showLoginForm = { showLoginForm } 
                showFindDoctorsPage = { showFindDoctorsPage } 
                />
            <FeatureBar />
            <FeatureGrid />
            <Locations />
        </main>
    );
}