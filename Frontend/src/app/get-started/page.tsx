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
    const fetchData = async () => {
      try {
        if (productKey) {
          const response = await fetch(productKey);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data: Product[] = await response.json();
          setProducts(data);
          setLoading(false);
        } else {
          console.error("productKey is not defined.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productKey]);

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
