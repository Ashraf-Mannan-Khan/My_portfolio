import { useState, useEffect } from "react";

import styles from '../css/body.module.css';



export function Body(props) {
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        let message = 'I am Ashraf Khan & I am frontend developer...';
        if (currentIndex < message.length) {
            let timeoutId = setTimeout(() => {
                setText(prev => prev + message[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 70);
            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, text]);


    return (
        <>
            <div className={styles.body}>
                <div className={styles.info_div}>
                    <h1 className={styles.title}>{text}</h1>
                <p className={styles.paragraph}>Frontend developer focused on <span>thoughtful UI</span> and smooth interactions. I build experiences that feel <span>light</span>, <span>purposeful</span>, and never demand more attention than they deserve.</p>
                <button className={styles.btn_resume}>Resume</button>
                </div>
                {props.children}
            </div>
            
        </>
    )
}