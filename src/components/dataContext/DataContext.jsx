import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const key = process.env.APIFY_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.apify.com/v2/datasets/5cO5qP2LAX7QVwt2B/items?token=${key}`
        );
        const updatedData = result.data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
