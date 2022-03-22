import React, { useContext } from "react";
import CartContext from "../../components/Store/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex align-items-center">
            {cartContext.items.map((item) => (
              <CartItem item={item} amount={item.amount} />
            ))}
            {!cartContext.items.length && (
              <div className="card text-dark bg-warning mb-3 emptyCart">
                <div className="card-header">Giỏ hàng của bạn đang trống!</div>
                <div className="card-body">
                  <h5 className="card-title">
                    Bạn chưa thêm bất kỳ sản phẩm nào vào giỏ hàng của mình !
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
