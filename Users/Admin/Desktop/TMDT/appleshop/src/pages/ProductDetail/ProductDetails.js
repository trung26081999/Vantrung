import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ProductDetails.css";
import CartContext from "../../components/Store/CartContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const cartContext = useContext(CartContext);
  const history = useHistory();
  const param = useParams();
  console.log(param);

  const goBackHome = () => {
    history.push("/");
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
        
      const data = await axios.get("Data.json");
      if (data) {
        const Product = data.data.filter((e) => {
          return e.id == param.id;
        });
        setProduct(Product[0]);
      }
      
    } catch (err) {
      console.log(err);
      
    }
        
  };

  const addItemToCart = (product) => {
    cartContext.addItem(product);
    console.log(product);
    console.log(cartContext);
  };

  return (
    <React.Fragment>
      <div className="container mt-3 d-flex justify-content-center">
        <div className="card productDetailCard" key={product.id}>
          <img
            src={product.hinhAnh}
            className="card-img-top mb-2 p-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.tenSanPham}</h5>
            <p className="card-text">{product.moTa}</p>
            <h6 className="card-text">{product.giaBan} đ</h6>
          </div>
          <footer className="mb-2">
            <a
              onClick={addItemToCart.bind(null, product)}
              className="btn btn-success m-3"
            >
              Thêm vào giỏ hàng
            </a>
            <a onClick={goBackHome} className="btn btn-secondary">
              Trang chủ
            </a>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetail;
