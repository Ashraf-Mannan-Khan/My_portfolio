import styles from '../css/tools.module.css';
import {useState, useEffect} from "react";
import '../css/font.css'
export function Tools() {
    const [reducedMotion, setReducedMotion] = useState(false);
    const images = [
        "public/icons/html.png",
        'public/icons/css-3.png',
        "public/icons/js.png",
        'public/icons/sciene.png',
        "public/icons/github.png",
        'public/icons/typescript.png',
        'public/icons/programing.png',
        "public/icons/html.png",
        'public/icons/css-3.png',
        "public/icons/js.png",
        'public/icons/sciene.png',
        "public/icons/github.png",
        'public/icons/typescript.png',
        'public/icons/programing.png',
         
    ]
    return (
        <>
        <div className={styles.container}>
            <section className={styles.heading}>
                <h2>Tools i use which i use Daily</h2>
            </section>
            <section className={styles.tools_container}>
                <div className={styles.scroller}>
                    {images.map((src, index)=> <img src={src} className={styles.tools}  alt={src} key={`img-${index}`} />)}
                </div>
            
            </section>

            <section className={styles.tools_container}>
                <div className={styles.scroller}  style={{ animationDirection: 'reverse'}}>
                    {images.map((src, index)=> <img src={src} className={styles.tools}  alt={src} key={`img-${index}`} />)}
                </div>
            
            </section>
            </div>
             
        </>
    )
}