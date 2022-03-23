import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProdukConsumer} from '../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './Navbar';


class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Navbar title="My Cart"/>
                <ProdukConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0)
                        {
                            return (
                                <div className="container">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <CartColumns />
                                            <CartList value={value}/>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <CartTotal value={value} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else{
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProdukConsumer>
            </Fragment>
        );
    }
}

export default Cart;