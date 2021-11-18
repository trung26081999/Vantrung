import React, { Component } from 'react';

class Animate extends Component {
    render() {
        return (
            <div id="fh5co-testimonial" className="fh5co-bg-section">
  <div className="container">
    <div className="row animate-box">
      <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
        <h2>CUSTOMER REVIEWS</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="row animate-box">
          <div className="owl-carousel owl-carousel-fullwidth">
            <div className="item">
              <div className="testimony-slide active text-center">
                <figure>
                  <img src="../../images/animate1.png" alt="user" />
                </figure>
                <span>Ms. Tran Thi Kim Anh <a href="#" className="twitter"><br/>Principal of Gia Tan High School - Hai Duong<br/></a></span>
                <blockquote>
                  <p>“Far far away, behind "My child's school is a public school without a camera system, parents really want to know their children's classroom activities.
With CTE-Learning, my child's memorable moments are saved and I can review the timeline very conveniently.”</p>
                </blockquote>
              </div>
            </div>
            <div className="item">
              <div className="testimony-slide active text-center">
                <figure>
                  <img src="../../images/animate2.jpg" alt="user" />
                </figure>
                <span>Mr. Vu Van Dat<a href="#" className="twitter"><br/>Vice Principal of An Lao High School -Hai Phong<br/></a></span>
                <blockquote>
                  <p>“In CTE-Learning, there is a directory of teachers and parents in the same class available, so it is very convenient for exchange and communication. I look up at any time the results of my children's learning, training, etc. You can even apply for an online leave from your phone, CTE-Learning is great!”</p>
                </blockquote>
              </div>
            </div>
            <div className="item">
              <div className="testimony-slide active text-center">
                <figure>
                  <img src="../../images/animate3.png" alt="user" />
                </figure>
                <span>Mr. Vu Van Cuong <a href="#" className="twitter"><br/>Parents of Thanh Liet High School - Hanoi<br/></a></span>
                <blockquote>
                  <p>“CTE-Learning supports the school's management and connection a lot. The software supports details from managing statistics, to expertise and school-wide activities"</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Animate;