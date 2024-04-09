import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>Homepage
  <div className={styles.textContainer}>
    <h1>Head Title</h1>
    <p>This consists of a paragraph right inder the main title of this page</p>
    <div className={styles.buttons}>
      <button className={styles.button}>Learn More</button>
      <button className={styles.button}>Contact</button>
    </div>
    <div className={styles.brands}>
      <Image />
    </div>
  </div>
  <div className={styles.imageContainer}></div>
  </div>
};

export default Home;