import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProdukConsumer} from '../Context';
import PropTypes from 'prop-types';

class Produk extends Component {
    render() {
        const {id,tenSanPham,hinhAnh,giaBan,inCart} = this.props.produk;
        return (
            <ProdukWrapper className="col-12 mx-auto col-md-6 col-lg-3 mx-1 mb-3">
                <div className="card">
                    <ProdukConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={()=>{
                                value.handleDetail(id)
                            }}>
                            <Link to="/details">
                                <img src={hinhAnh} alt={tenSanPham} className="card-img-top" />
                            </Link>

                            <button className="cart-btn btn btn-primary" disabled={inCart?true:false}
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                            {
                                inCart ? (
                                    <p className="text-capitalize mb-0" disabled>{" "} in cart</p>
                                ):(
                                    <i className="fas fa-cart-plus"></i>
                                )
                            }
                            </button>
                            </div>


                        )}
                </ProdukConsumer>

                {/* Produk Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {tenSanPham}
                        </p>
                        
                    </div>
                    <div>
                    <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">{giaBan}đ</span>
                        </h5>
                    </div>
                </div>
            </ProdukWrapper>
        );
    }
}

export default Produk;

Produk.propTypes = {
    produk: PropTypes.shape({
        id: PropTypes.number,
        hinhAnh: PropTypes.string,
        tenSanPham: PropTypes.string,
        giaBan: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
};

const ProdukWrapper = styled.div`
    .card{
        border-color : transparent;
        transition : all 1s linear;
    }
    .card-footer{
        background : transparent;
        border-top : transparent;
        transition : all 1s linear;
    }
    &:hover {
        .card {
            border : 0.04rem solid rgba(0,0,0,.2);
            box-shadow : 2px 2px 5px 0px rgba(0,0,0,.2)
        }
        .card-footer{
            background : rgb(247,247,247);
        }
    }
    .img-container {
        position : relative;
        overflow : hidden;
    }
    .card-img-top{
        transition : all .2s linear;
    }
    .img-container:hover .card-img-top {
        transform : scale(1.2);
    }
    .cart-btn {
        position : absolute;
        bottom : 0;
        right : 0;
        border : none;
        color : var(--mainWhite);
        font-size : 1.3rem;
        border-radius : .5rem 0 0 0;
        transition : all .2s linear;
        transform : translate(100%,100%);
    }
    .img-container:hover .cart-btn {
        transform : translate(0,0);
    }

`;
