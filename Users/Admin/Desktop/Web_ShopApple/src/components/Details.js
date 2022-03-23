import React, { Component } from "react";
import { ProdukConsumer } from "../Context";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Fragment } from "react/cjs/react.production.min";
import Produk from "./Produk";

class Detail extends Component {
  render() {
    return (
      <ProdukConsumer>
        {(value) => {
          const { id, company, hinhAnh, moTa, giaBan, tenSanPham, inCart } =
            value.detailProduk;
          return (
            <Fragment>
              <Navbar title={tenSanPham} />
              <div className="container">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="card">
                      <div className="text-center">
                        <img
                          src={hinhAnh}
                          alt={tenSanPham}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <h2>Model : {tenSanPham}</h2>
                        <p className="text-muted m-0">
                          Sản xuất bởi: <span>{company}</span>
                        </p>
                        <h4 className="text-primary">
                          <strong>
                            Giá bán : <span></span>
                            {giaBan}đ
                          </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                          Một số thông tin theo sản phẩm
                        </p>
                        <p className="text-muted">{moTa}</p>
                      </div>
                      <div className="card-footer">
                        <Link to="/">
                          <button className="me-2 btn btn-danger">
                            Trở lại sản phẩm
                          </button>
                        </Link>
                        <button
                          className="btn btn-success"
                          disabled={inCart ? true : false}
                          onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                          }}
                        >
                          {inCart ? "InCart" : "Thêm vào giỏ hàng"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }}
      </ProdukConsumer>
    );
  }
}

export default Detail;
