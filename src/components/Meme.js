import React, { useState, useEffect } from "react";
import styles from "../styles/Meme.module.css";
// import data from "../data";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  /* 
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes") //Fetch data from API
      .then((result) => result.json()) //Parse the returned JSON
      .then((data) => {
        setAllMemes(data.data.memes);//Set data in state
      });
  }, []);
*/

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getNewImage(event) {
    event.preventDefault();
    const randomNumber = randomIntFromInterval(0, allMemes.length - 1);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Top text"
          className={styles.formInput}
          name="topText"
          value={meme.topText}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={styles.formInput}
          name="bottomText"
          value={meme.bottomText}
          onChange={handleFormChange}
        />
        <button className={styles.formButton} onClick={getNewImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className={styles.memeContainer}>
        <img src={meme.randomImage} alt="meme" className={styles.memeImage} />
        <h2 className={`${styles.memeText} ${styles.top}`}>{meme.topText}</h2>
        <h2 className={`${styles.memeText} ${styles.bottom}`}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );

  // Yotam JSX
  // return (
  //   <form>
  //     <div className={styles.Meme}>
  //       <div className={`ui input ${styles.input}`}>
  //         <input type="text" placeholder="" />
  //       </div>
  //       <div className={`ui input ${styles.input}`}>
  //         <input type="text" placeholder="" />
  //       </div>
  //     </div>
  //     <div className={styles.btnContainer}>
  //       <button className={`ui button ${styles.button}`}>
  //         Get a new meme image
  //         <i className={`file image outline icon ${styles.icon}`}></i>
  //       </button>
  //     </div>
  //   </form>
  // );
}

export default Meme;
