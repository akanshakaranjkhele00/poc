"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  price: number;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const productKey = process.env.productKey;
  useEffect(() => {
    if (productKey) {
      fetch(productKey)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: Product[]) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      console.error("productKey is not defined.");
    }
  }, []);

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
        <h1 className={styles.pro}>Products</h1>
        <div className={styles.productContainer}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
