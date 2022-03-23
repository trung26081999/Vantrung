import React from 'react';

export default function CartColumns() {
    return (
        <div>
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Sản phẩm</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Tên sản phẩm</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Giá bán</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Số lượng</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Xóa</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Tổng tiền</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

