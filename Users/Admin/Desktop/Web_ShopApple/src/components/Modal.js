import React, { Component } from 'react';
import styled from 'styled-components';
import {ProdukConsumer} from '../Context';
import {Link} from 'react-router-dom';


class Modal extends Component {
    render() {
        return (
          <ProdukConsumer>
              {(value)=>{
                  const {modalOpen,closeModal} = value;
                  const {hinhAnh,tenSanPham,giaBan} = value.modalProduk;
                  if(!modalOpen)
                  {
                      return null;
                  }
                  else
                  {
                      return (
                        <ModalContainer>
                            <div className="container">
                                <div id="modal" className="row">
                                    <div className="col-8 mx-auto py-3 col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Mặt hàng đã được thêm vào giỏ hàng</h5>
                                        <img src={hinhAnh} alt={tenSanPham} className="img-fluid"/>
                                        <h5>{tenSanPham}</h5>
                                          <h5 className="text-muted">Giá bán: <span>{giaBan}đ</span></h5>
                                          <Link to="/">
                                              <button onClick={() => closeModal()} className="me-2 btn btn-warning">
                                                  Tiếp tục mua
                                              </button>
                                          </Link>
                                          <Link to="/cart">
                                              <button cart onClick={() => closeModal()} className="btn btn-success">
                                                Đến giỏ hàng
                                              </button>
                                          </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                      );
                  }
              }}
          </ProdukConsumer>
        );
    }
}

export default Modal;

const ModalContainer =styled.div`

    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba(0,0,0,.3);
    display : flex;
    align-items : center;
    justify-content : center;

    #modal {
        background : var(--mainWhite);

    }
`;