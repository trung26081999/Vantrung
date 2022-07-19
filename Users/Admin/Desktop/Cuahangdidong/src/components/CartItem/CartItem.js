import React, { useContext } from "react"
import CartContext from "../Store/CartContext"

function CartItem(item) {

    const cartContext = useContext(CartContext)
    

    return (
        <React.Fragment>
            <div className="card" key={item.item.id}>
                <img src={item.item.hinhAnh} className="card-img-top mb-2 p-2" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"><strong>{item.item.tenSanPham}</strong></h4>
                    <h5 className="card-text">{item.item.giaBan} đ</h5>
                    <h5 className="card-text"><strong>{item.amount}</strong></h5>
                </div>
               
            </div> 
    </React.Fragment>
    )
}

export default CartItem