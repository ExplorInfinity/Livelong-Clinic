import type { JSX } from "react";
import styles from './style.module.css'

type CardProps = {
    img: string
    title: string
    description: string
    imagePadding?: number
}

export default function Card({ img, title, description, imagePadding }:CardProps): JSX.Element {
    return (
        <div className={styles.container}>

            <img style={{ "padding": `${imagePadding ?? 0}px` } as React.CSSProperties} 
                 className={styles.img} src={img} alt="doctors" />

            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}