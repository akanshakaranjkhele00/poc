"use client";
//require("dotenv").config({ path: "./.env" });
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import process from "process";

interface ShopItem {
  orderId: number;
  product: string;
  quantity: number;
  total: number;
}

const TableDashboard: React.FC = () => {
  const [shopData, setShopData] = useState<ShopItem[]>([]);
  const apiKey = process.env.apiKey;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (apiKey) {
          const response = await fetch(apiKey);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data: ShopItem[] = await response.json();
          setShopData(data);
        } else {
          console.error("API_BASE_URL is not defined.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey]);

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
