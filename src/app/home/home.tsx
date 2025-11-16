import type { JSX } from "react";
import HeroSection from "./sub-components/heroSection/heroSection";
import FeatureBar from "./sub-components/featureBar/featureBar";
import FeatureGrid from "./sub-components/featureGrid/featureGrid";
import styles from './style.module.css'
import { useEffect, useRef } from "react";
import SimpleButton from "../../components/simpleBtn/simpleBtn";
// import arrowSvg from '/right-arrow.svg'

export default function Home(): JSX.Element {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <main>

            <HeroSection />
            <FeatureBar />
            <FeatureGrid />

            <dialog ref={dialogRef} className={styles.loginPage}>
                <div className={styles.banner}>
                    <h1>Livelong Clinic</h1>
                </div>

                <form className={styles.loginForm} onSubmit={e => {e.preventDefault(); dialogRef.current?.close()}} action={() => dialogRef.current?.close()} method="DIALOG">
                    <label htmlFor="username">Enter your Patient ID</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="password">Enter your password</label>
                    <input type="text" name="password" id="password" placeholder="Password" />

                    <div className={styles.formBtns}>
                        <SimpleButton text="Login" styleVariables={{
                            backgroundColor: "var(--blue-900)",
                            transitionDuration: 250,
                            justifyContent: "center",
                            // width: 180
                        }} />
                        <SimpleButton text="Sign Up" styleVariables={{
                            backgroundColor: "white",
                            transitionDuration: 250,
                            justifyContent: "center",
                            textColor: "black"
                            // width: 180
                        }} />
                    </div>
                </form>

                
            </dialog>

        </main>
    );
}