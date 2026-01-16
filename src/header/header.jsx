
import styles from '../css/header.module.css';
import '../css/font.css'
import { Link, NavLink } from 'react-router-dom';
export function Header(props) {

    return (
        <>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.list_item}><NavLink to="/#" className={styles.anchor}>Home</NavLink> </li>
                    <li className={styles.list_item}><a href="#work" className={styles.anchor}>Work</a> </li>
                    <li className={styles.list_item}><NavLink to="/about" className={styles.anchor} >About</NavLink> </li>
                    <li className={styles.list_item}><a href="#contact" className={styles.anchor} >Contact</a> </li>
                </ul>
            </nav>
            {props.children}
        </>
    )
}