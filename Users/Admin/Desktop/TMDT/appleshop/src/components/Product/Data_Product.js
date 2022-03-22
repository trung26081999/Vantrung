import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

function Data_Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('Data.json')
      .then((response) => {
        setProducts(response.data);
        console.log(products);
      }) 
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="d-flex flex-wrap">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              tenSanPham={product.tenSanPham}
              giaBan={product.giaBan}
              hinhAnh={product.hinhAnh}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Data_Product;
