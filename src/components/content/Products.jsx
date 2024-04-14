import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const selectAll = async () => {
    const result = await axios.get("/products");
    setProducts(result.data);
    console.log(result.data);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    selectAll();
  }, []);

  return (
    <div className="product_wrap">
      <h3 className="product_title">Just Dropped</h3>
      <p className="product_sub_title">발매 상품</p>
      <div className="product_inner">
        {products.map((product) => (
          <div className="product_card" key={product.id}>
            <img src={product.imageUrl} alt={product.productName} />
            <p className="brandName">
              {capitalizeFirstLetter(product.brandNameEng)}
            </p>
            <h3 className="productName">{product.productName}</h3>
            <p className="price">
              {new Intl.NumberFormat("ko-KR").format(product.price)}원
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
