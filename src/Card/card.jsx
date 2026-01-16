import image from "../image/image1.jpeg";
import styles from "../css/card.module.css";
import "../css/font.css";
export function Card() {


    return (

        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={image} alt="coder boy" className={styles.img} />
            </div>
            <h3 className={styles.title}>Ashraf-e-Nama</h3>
        </div>


    )
}