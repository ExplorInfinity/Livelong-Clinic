import type { JSX } from "react";
import styles from './style.module.css'
import type React from "react";

type btnStyles = {
    backgroundColor: string
    transitionDuration: number
}

type btnProps = {
    text : string
    svg ?: string
    styleVariables: btnStyles
}

export default function ColorFillBtn({ text, svg, styleVariables }: btnProps): JSX.Element {
    const { backgroundColor, transitionDuration }:btnStyles = styleVariables;

    return (
        <button style={
            { 
                "--color-background": backgroundColor,
                "--transition-duration": `${transitionDuration}ms`
            } as React.CSSProperties
        } className={styles.btn}>
            { text }
            <img className={styles.svg} src={svg} alt="img" />
        </button>
    );
}