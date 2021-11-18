import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div id="fh5co-counter" className="fh5co-counters">
  <div className="container">
    <div className="row">
      <div className="col-md-3 text-center animate-box">
        <span className="fh5co-counter js-counter" data-from={0} data-to={40356} data-speed={5000} data-refresh-interval={50} />
        <figure>
                  <img src="../../images/Xudun.png" alt="" />
                </figure>
        <span className="fh5co-counter-label"><b>Educational administrator teacher</b></span>
      </div>
      <div className="col-md-3 text-center animate-box">
        <span className="fh5co-counter js-counter" data-from={0} data-to={30290} data-speed={5000} data-refresh-interval={50} />
        
                <figure>
                  <img src="../../images/Parent.png" alt="" />
                </figure>
            <span className="fh5co-counter-label"><b>Parents</b></span>
        
      </div>
      <div className="col-md-3 text-center animate-box">
        <span className="fh5co-counter js-counter" data-from={0} data-to={2039} data-speed={5000} data-refresh-interval={50} />
        <figure>
                  <img src="../../images/Giaovien.png" alt="" />
                </figure>
        <span className="fh5co-counter-label"><b>School</b></span>
      </div>
      <div className="col-md-3 text-center animate-box">
        <span className="fh5co-counter js-counter" data-from={0} data-to={997585} data-speed={5000} data-refresh-interval={50} />
        <figure>
                  <img src="../../images/bangtin.png" alt="" />
                </figure>
        <span className="fh5co-counter-label"><b>Newsletters are sent out every month</b></span>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Container;