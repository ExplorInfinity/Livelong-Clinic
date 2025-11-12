import type { JSX } from "react";
import styles from './style.module.css'
import type React from "react";

type btnStyles = {
    textColor?: string
    backgroundColor?: string
    transitionDuration?: number
    justifyContent?: string
    width?: number
}

type btnProps = {
    text : string
    styleVariables: btnStyles
}

export default function SimpleButton({ text, styleVariables }: btnProps): JSX.Element {
    const { textColor, backgroundColor, transitionDuration, justifyContent, width }:btnStyles = styleVariables;

    return (
        <button style={
            { 
                "--color-text": textColor,
                "--color-background": backgroundColor,
                "--transition-duration": `${transitionDuration}ms`,
                "--justify-content": justifyContent,
                "--width": (width ? `${width}px` : null)
            } as React.CSSProperties
        } className={styles.btn}>
            { text }
        </button>
    );
}