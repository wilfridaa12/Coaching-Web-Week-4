import React, { useState, useEffect } from "react";
import axios from "axios";

function Store() {
  const [product, setProduct] = useState({});

  const fetchData1 = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/1");
    setProduct(res.data);
  };

  useEffect(() => {
    fetchData1();
  }, []);

  return (
    <div className="text-danger p-5">
      <div className="border border-dark w-150">
        <h1>Store</h1>
        <div>
          Title: {product?.title} <br />
          Price: {product?.price} <br />
          Description: {product?.description} <br />
          Category: {product?.category} <br />
          Rating: {product?.rating?.rate} <br />
          Count: {product?.rating?.count} <br />
          Image:
          <img style={{ width: 150, height: 200 }} src={product?.image} />
        </div>
      </div>
    </div>
  );
}

export default Store;
