import React, { Component } from "react";
import Produk from "./Produk";
import { ProdukConsumer } from "../Context";
import { Fragment } from "react/cjs/react.production.min";
import Navbar from "./Navbar";

class ProdukList extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <ProdukConsumer>
              {(value) => {
                return value.produks.map((produk) => {
                  return <Produk key={produk.id} produk={produk} />;
                });
              }}
            </ProdukConsumer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProdukList;
