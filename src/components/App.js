import styles from "../styles/App.module.css";
import Header from "./Header";
import Meme from "./Meme";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
