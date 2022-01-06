import React, { useEffect, useState } from "react";
const ProductManage = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shopManage")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  return (
    <div>
      <h1>product management {product.length} </h1>
    </div>
  );
};

export default ProductManage;
