import type { JSX } from 'react';
import styles from './style.module.css';
import SimpleButton from '../../../../components/simpleBtn/simpleBtn';

type SignupFormProps = {
    forwardRef: React.RefObject<HTMLDialogElement | null>
    openLoginForm: () => void
    closeForm: () => void
}

export default function SignupForm({ forwardRef, openLoginForm }: SignupFormProps) : JSX.Element {

    return (
        <dialog ref={forwardRef} className={styles.loginPage}>
            <div className={styles.banner}>
                <h1>Livelong Clinic</h1>
            </div>

            <form className={styles.loginForm} method="DIALOG">
                <label htmlFor="name">Enter your name</label>
                <input type="text" name="name" id="name" placeholder="name" />
                <label htmlFor="dob">Enter your DOB</label>
                <input type="date" name="dob" id="dob" placeholder="Date of birth" />
                <label htmlFor="password">Enter your password</label>
                <input type="text" name="password" id="password" placeholder="Password" />

                <div className={styles.formBtns}>
                    <SimpleButton text="Sign Up" type="submit" styleVariables={{
                        backgroundColor: "var(--blue-900)",
                        transitionDuration: 250,
                        justifyContent: "center"
                    }} />
                    <SimpleButton text="Login" type="submit" onclick={openLoginForm} styleVariables={{
                        backgroundColor: "white",
                        transitionDuration: 250,
                        justifyContent: "center",
                        textColor: "black"
                    }} />
                </div>
            </form>
        </dialog>
    );
}