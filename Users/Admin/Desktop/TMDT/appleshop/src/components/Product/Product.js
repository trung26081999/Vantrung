import React from "react"
import "./Product.css"
import { useHistory } from "react-router-dom"

function Product(props) {

    const history = useHistory()
    const productDetails = () => {
        history.replace(`/${props.id}`)
    }

    return (
        <React.Fragment>
            <div className="card" key={props.id}>
                <img src={props.hinhAnh} className="card-img-top mb-2 p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.tenSanPham}</h5>
                    <p className="card-text">{props.giaBan} đ</p>
                </div>
                <footer className="mb-2">
                    <button onClick={productDetails} className="btn btn-secondary">Chi tiết</button>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Product