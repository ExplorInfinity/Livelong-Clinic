import type { JSX } from "react";
import HeroSection from "./sub-components/heroSection/heroSection";
import FeatureBar from "./sub-components/featureBar/featureBar";
import FeatureGrid from "./sub-components/featureGrid/featureGrid";
import LoginForm from "../features/auth/loginForm/loginForm";

export default function Home(): JSX.Element {

    return (
        <main>
            <HeroSection />
            <FeatureBar />
            <FeatureGrid />
            <LoginForm />
        </main>
    );
}