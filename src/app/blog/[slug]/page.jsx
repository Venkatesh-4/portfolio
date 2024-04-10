import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/20877176/pexels-photo-20877176/free-photo-of-general-archive-of-the-indies-in-seville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.img} fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/20877176/pexels-photo-20877176/free-photo-of-general-archive-of-the-indies-in-seville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.avatar} width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Ajay Manikandan</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>23.12.1999</span>
                    </div>
                </div>
                <div className={styles.content}>
                    random sentence to test the description scenens random sentence to test the description scenens random sentence to test the description scenens random sentence to test the description scenens random sentence to test the description scenens
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage