// About.js
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.full}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>About Us</h1>
          <div className={styles.verticalText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quod necessitatibus id qui, fugit quos ipsam eius deleniti
              provident doloribus eveniet odio, vero ab aliquam, laudantium
              dolorum non quidem exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quod necessitatibus id qui, fugit quos ipsam eius deleniti
              provident doloribus eveniet odio, vero ab aliquam, laudantium
              dolorum non quidem exercitationem.
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://buzzflick.com/wp-content/uploads/2020/03/Corporate-Video-for-business.jpg"
            alt="Your Image"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
