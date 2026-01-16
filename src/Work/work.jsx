import styles from '../css/work.module.css';
import '../css/font.css';
import { useState } from 'react';
export function Work() {
    const [isHovering, setIsHovering] = useState(Array(5).fill(false));

    function handleMouseEnter(id) {
        const nextArray = isHovering.slice();
        console.log(id);


        nextArray[id] = true;
        setIsHovering(nextArray);

    }
    function handleMouseLeave({ id }) {

        const nextArray = isHovering.slice();
        nextArray[id] = false;
        setIsHovering(nextArray);


    }
    const upward = {
        transform: 'translate(0, -10px)',

    }

    let work = [
        {
            id: 0,
            framework: "React",
            name: "Tic Tac Toe",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: "public/icons/strategic-plan.png",
        },
        {
            id: 1,
            framework: "React",
            name: "Tic Tac Toe",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: "public/icons/strategic-plan.png",

        },
        {
            id: 2,
            framework: "React",
            name: "Currency Exchange App",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: "public/icons/strategic-plan.png",
        }, {
            id: 3,
            framework: "React",
            name: "Spotify Playlist Save App",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: "public/icons/strategic-plan.png",

        },
        {
            id: 4,
            framework: "React",
            name: "Reddit Client App",
            description: "Tic Tac Toe is a two-player game where players take turns marking X and O on a 3*3 grid, aiming to get three in a row.",
            src: "public/icons/strategic-plan.png",
        },
    ]


    return (
        <>
            <section className={styles.cardSection} id="work">
                <h2 className={styles.title}>Featured Work</h2>
                <div className={styles.work_div}>
                    {work.map((item, index) => {
                        return (
                            <div className={styles.card} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={() => handleMouseLeave(item)} value={item.id} key={index}>
                                <div className={styles.img_div}>
                                    <img src={item.src} alt={item.name} className={styles.img} />
                                </div>
                                <div className={styles.text_div}>
                                    <h3 className={styles.framework} style={isHovering[index] ? upward : null}>{item.framework}</h3>
                                    <h4 className={styles.sub_title} style={isHovering[index] ? upward : null}>{item.name}</h4>
                                    <p className={styles.paragraph} style={isHovering[index] ? upward : null}>{item.description}</p>
                                    {isHovering[index] && <div className={styles.arrow}  ></div>}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>

        </>
    )
} 