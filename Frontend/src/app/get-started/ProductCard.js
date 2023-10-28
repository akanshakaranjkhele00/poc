// components/ProductCard.js
import React from "react";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
