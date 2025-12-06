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
    type?: "button" | "submit"
    styleVariables: btnStyles
    onclick?: () => void
}

export default function SimpleButton({ text, type="button", styleVariables, onclick }: btnProps): JSX.Element {
    const { textColor, backgroundColor, transitionDuration, justifyContent, width }:btnStyles = styleVariables;

    return (
        <button 
            type={type} 
            className={styles.btn}
            onClick={onclick}
            style={
                { 
                    "--color-text": textColor,
                    "--color-background": backgroundColor,
                    "--transition-duration": `${transitionDuration}ms`,
                    "--justify-content": justifyContent,
                    "--width": (width ? `${width}px` : null)
                } as React.CSSProperties
            }
        >
            { text }
        </button>
    );
}