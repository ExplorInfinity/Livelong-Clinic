import type { JSX } from "react";
import HeroSection from "./sections/heroSection/heroSection";
import FeatureBar from "./sections/featureBar/featureBar";
import FeatureGrid from "./sections/featureGrid/featureGrid";
import Locations from "./sections/locations/locations";
import LoginForm from "../features/auth/loginForm/loginForm";

export default function Home(): JSX.Element {

    return (
        <main>
            <HeroSection />
            <FeatureBar />
            <FeatureGrid />
            <Locations />
            <LoginForm />
        </main>
    );
}