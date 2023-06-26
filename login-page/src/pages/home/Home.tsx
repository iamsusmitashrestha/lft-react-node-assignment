import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/product";
import "./home.style.scss";

interface IProduct {
  id: number;
  productName: string;
  qty: number;
  price: number;
}

function Product() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <div>{product.productName}</div>
            <div>{product.qty}</div>
            <div>{product.price}</div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
