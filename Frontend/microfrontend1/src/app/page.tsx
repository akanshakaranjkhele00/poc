"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

interface ShopItem {
  orderId: number;
  product: string;
  quantity: number;
  total: number;
}

const TableDashboard: React.FC = () => {
  const [shopData, setShopData] = useState<ShopItem[]>([]); // Specify the type as ShopItem[]

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:3000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ShopItem[]) => {
        setShopData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <br />
        <br />
        <table className={styles.shopTable}>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {shopData.map((item, index) => (
              <tr key={index}>
                <td>{item.orderId}</td>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboard;
