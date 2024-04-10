import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const postCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/20877176/pexels-photo-20877176/free-photo-of-general-archive-of-the-indies-in-seville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>23.12.1999</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>long text to check how it is in the screen long text to check how it is in the screen long text to check how it is in the screen long text to check how it is in the screen long text to check how it is in the screen</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default postCard