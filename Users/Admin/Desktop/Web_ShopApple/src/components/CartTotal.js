import React from 'react';
import { Link } from 'react-router-dom';

export default function CartColumns({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value; 
    return (
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                    Xóa giỏ hàng
                </button>
            </Link>
            <p className="m-0 p-0 mb-1">
                <span className="text-title">Tổng phụ : </span>
                <strong>{cartSubtotal}đ</strong>
            </p>
            <p className="m-0 p-0 mb-1">
                <span className="text-title">Thuế : </span>
                <strong>{cartTax}đ</strong>
            </p>
            <p className="m-0 p-0 mb-1">
                <span className="text-title">Thành tiền : </span>
                <strong>{cartTotal}đ</strong>
            </p>
        </div>
    );
}

