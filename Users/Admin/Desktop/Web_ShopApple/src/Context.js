import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';
import Swal from 'sweetalert2';

const ProdukContext = React.createContext();

class ProdukProvider extends Component {

    state = {
        produks : storeProducts,
        detailProduk : detailProduct,
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        // cart: [],
        modalOpen : false,
        modalProduk : detailProduct,
        cartSubtotal : 0,
        cartTax : 0,
        cartTotal : 0,
    }

    componentDidMount = () => {
        this.setProduks();
    }

    setProduks = () => {
        let tempProduks = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            if (localStorage.getItem('cart') !== null) {
                let getCartLocalStorage = JSON.parse(localStorage.getItem('cart'));
                getCartLocalStorage.forEach(items => {
                    // console.log(singleItem);
                    if (singleItem.id === items.id)
                    {
                        singleItem.inCart = true;
                        console.log(singleItem.inCart);
                    }
                })
            }
            tempProduks = [...tempProduks,singleItem];
        });

        this.addTotals();

        this.setState(() => {
            return { produks: tempProduks };
        });

    }

    getItem = (id) => {
        const produk = this.state.produks.find(item => item.id ===id );
        return produk;
    }

    handleDetail = (id) => {
        const produk = this.getItem(id);
        console.log(produk);
        this.setState(()=>{
            return { detailProduk:produk}
        })
    }

    addToCart = (id) => {
        let tempProduks = [...this.state.produks];
        const index = tempProduks.indexOf(this.getItem(id));
        const produk = tempProduks[index];
        produk.inCart = true;
        produk.count = 1;
        const  giaBan = produk.giaBan;
        produk.total = giaBan;

        const Swal = require('sweetalert2');
        Swal.fire({
            text: 'Sản phẩm đã được thêm vào giỏ!',
            icon: 'Thành công'
        })
        this.setState(()=>{
            // localStorage.setItem('cart', json.stringify()));
            localStorage.setItem('cart', JSON.stringify([...this.state.cart, produk]));
            return {produks:tempProduks, cart: [...this.state.cart,produk]};
        },
        ()=>{
            this.addTotals();
        });
    }

    openModal = (id) => {
        const produk = this.getItem(id);
        this.setState(()=>{
            return {modalProduk:produk,modalOpen:true};
        })
    }

    closeModal = (id) => {
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    increase = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduk = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduk);
        const produk = tempCart[index];
        produk.count = produk.count + 1;
        produk.total = produk.count * produk.giaBan;

        this.setState(()=>{
            localStorage.setItem('cart', JSON.stringify([...tempCart]));

            return {
                cart : [...tempCart]
            }
        },
        ()=>{
            this.addTotals();
        })
    }

    decrease = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduk = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduk);
        const produk = tempCart[index];
        produk.count = produk.count - 1;
        if(produk.count===0)
        {
            this.removeItem(id);
        }
        else{
            produk.total = produk.count * produk.giaBan;
            this.setState(() => {
                localStorage.setItem('cart', JSON.stringify([...tempCart]));
                return {
                    cart: [...tempCart]
                }
            },
                () => {
                    this.addTotals();
                })
        }

        
    }

    removeItem = (id) => {
        console.log(id);
        let tempProduks = [...this.state.produks];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProduks.indexOf(this.getItem(id));
        let removeProduk = tempProduks[index];
        removeProduk.inCart = false;
        removeProduk.count = 0;
        removeProduk.total = 0;

        Swal.fire({
            text: 'Sản phẩm đã được xóa khỏi giỏ!',
            icon: 'Thành công'
           
        })
        this.setState(()=>{
            localStorage.setItem('cart', JSON.stringify([...tempCart]));
            return {
                cart : [...tempCart],
                produks : [...tempProduks],
            }
        },
        ()=>{
            this.addTotals();
        })
    }

    clearCart = () => {
        Swal.fire({
            text: 'Sản phẩm đã được thêm vào giỏ!',
            icon: 'Thành công'
        })
        localStorage.removeItem('cart');
        this.setState(()=>{
            return {
                cart : []
            }
        },()=>{
            this.setProduks();
            this.addTotals();
        })
    }

    addTotals = () =>{
        let subtotal = 0;
        this.state.cart.map(item=>(subtotal+=item.total));
        const tempTax = subtotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        this.setState(()=>{
            return {
                cartSubtotal: subtotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }

    render() {
        return (
            <ProdukContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal : this.openModal,
                    closeModal : this.closeModal,
                    increase: this.increase,
                    decrease: this.decrease,
                    clearCart: this.clearCart,
                    removeItem: this.removeItem,
                }}>
                {this.props.children}
            </ProdukContext.Provider>
        );
    }
}

const ProdukConsumer = ProdukContext.Consumer;

export {ProdukProvider,ProdukConsumer};