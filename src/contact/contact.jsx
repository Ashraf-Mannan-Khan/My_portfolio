import styles from '../css/contact.module.css';
import contactImage from "../image/icons/connect.avif";
export function Contact () {

    return (
        <>
        <section className={styles.conatiner} id="contact">
            <h2>Let's Get in Touch</h2>
            <p>I Love to connect</p>
            <img src={contactImage} alt="connect-image" className={styles.image} />
            <div className={styles.information}>
                <p>Email</p>
                <p>ashrfkhn97@gmail.com</p>
            </div>
            <div className={styles.information}>
                <p>LinkedIn</p>
                <p className={styles.arrow}>Ashraf_Khan</p>
            </div>
            <div className={styles.information}>
                <p>Facebook</p>
                <p className={styles.arrow}>Ashraf_khan_97</p>
            </div>
            <div className={styles.information}>
                <p>Instagram</p>
                <p className={styles.arrow}>Ashraf_Khan_97</p>
            </div>
        </section>
        <footer>
            <h2>Ashraf Khan</h2>
            <h2>Ⓒ 2025</h2>
            <p>Created with idea of "simplicity" and easy to "navigate"</p>
        </footer>
        </>
    )
}