import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.jpg";
import { ProdukConsumer } from '../Context';
import { Fragment } from 'react/cjs/react.production.min';

function Navbar(props) {
    return (
        <ProdukConsumer>
            {value => {
                const cart = value.cart;
                return (
                    <Fragment>
                        <div className="navbar navbar-expand-sm px-sm-5 justify-content-between bg-dark mb-3">
                            <Link to="/">
                                <img src={logo} alt="Store" className="nav-bar-brand mx-1" width="40px" />
                            </Link>
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item ml-5">
                                    <Link to="/" className="text-decoration-none">
                                        <h4 className="m-0 p-0 fw-bold text-white">Apple Store</h4>
                                    </Link>
                                </li>
                            </ul>
                            <Link to="/cart" className="mx-1">
                                <button className="btn btn-primary">
                                    {
                                        (cart.length > 0) ? <span className="badge bg-warning">{cart.length}</span> : ''
                                    }
                                    <span className="fa fa-cart-plus"></span>
                                </button>
                            </Link>
                        </div>
                        
                        <div className="container mb-0">
                            <h3>{props.tenSanPham}</h3>
                        </div>
                    </Fragment>
                )}
            }

        </ProdukConsumer>
        
        
    );
}

export default Navbar;

Navbar.defaultProps = {
    tenSanPham: 'Apple Store'
}