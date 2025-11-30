import type { JSX } from "react";
import styles from './style.module.css'
import type React from "react";

type btnStyles = {
    backgroundColor?: string
    transitionDuration?: number
    justifyContent?: string
    width?: number
    hoverWidth?: number
}

type btnProps = {
    text : string
    svg ?: string
    styleVariables: btnStyles
    onClick ?: () => void
}

export default function ColorFillBtn({ text, svg, styleVariables, onClick }: btnProps): JSX.Element {
    const { backgroundColor, transitionDuration, justifyContent, width, hoverWidth }:btnStyles = styleVariables;

    return (
        <button onClick={onClick} style={
            { 
                "--color-background": backgroundColor,
                "--transition-duration": `${transitionDuration}ms`,
                "--justify-content": justifyContent,
                "--width": (width ? `${width}px` : null),
                "--hover-width": ((hoverWidth || width) ? `${hoverWidth ?? width}px` : null)
            } as React.CSSProperties
        } className={styles.btn}>
            { text }
            { svg && <img className={styles.svg} src={svg} alt="img" /> }
        </button>
    );
}