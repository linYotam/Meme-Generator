import styles from "../styles/Header.module.css";
import trollFace from "../images/TrollFace.png";

function Header() {
  return (
    <div className={styles.Header}>
      <img className={styles.trollImage} src={trollFace} alt="troll face" />
      <h1 className={styles.title}>Meme Generator</h1>
      <div className={styles.miniTitle}>React Course - Project 4</div>
    </div>
  );
}

export default Header;
