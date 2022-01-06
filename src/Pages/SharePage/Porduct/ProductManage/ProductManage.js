import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const ProductManage = () => {
  const [manage] = useParams();
  const [product, setproduct] = useState();

  return (
    <div>
      <h1>product management {manage} </h1>
    </div>
  );
};

export default ProductManage;
