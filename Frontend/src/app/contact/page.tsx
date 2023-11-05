import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container}>
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
      <h1 className={styles.title}>Contact Us</h1>
      <p>
        <img
          src="https://media.istockphoto.com/id/1153130142/photo/businessman-touching-icon-mobile-phone-mail-telephone-and-address-customer-service-call.jpg?s=612x612&w=0&k=20&c=r4PWtYlcfYU_6YUxdz2LbVgSDuXDwo_Hr62o7USYaiA="
          alt="Your Image"
          className={styles.image}
        />
      </p>
      <div>
        <h2 className={styles.title2}>
          We can't solve your problem if you don't tell us about it
        </h2>
        <br />
        <br />
        <br />
      </div>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
