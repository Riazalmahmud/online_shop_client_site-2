import React, { useState, useEffect } from "react";
import Cart from "../Pages/Card/Cart";
import MenShopings from "../Pages/SharePage/Porduct/MenShopings/MenShopings";
import ShopNows from "../Pages/SharePage/Porduct/ShopNows/ShopNows";
import WeeklyProducts from "../Pages/SharePage/Products/WeeklyProducts/WeeklyProducts";
const HandaleFunction = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-fjord-46479.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <WeeklyProducts products={products}></WeeklyProducts>
      <ShopNows products={products}></ShopNows>
      <MenShopings products={products}></MenShopings>
      <Cart></Cart>
    </div>
  );
};

export default HandaleFunction;
