import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navcontainer}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li>
              <Link href="/home">
                <div>Home</div>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <div>Contact</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div>About</div>
              </Link>
            </li>
          </ul>
        </nav>

        <img
          src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg"
          alt="Your Image"
          className={styles.image}
        />

        <div className={styles.containertoside}>
          <div className={styles.onlineheading}>Online Shopping</div>
          <div className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            rerum harum error, nesciunt incidunt inventore vitae, sit,
            laboriosam delectus fugit nisi quis quae sed ipsum sint. Accusantium
            eum iure ut.
          </div>
          <Link href="/get-started">
            <div className={styles.shopButton}>Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
