import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div id="fh5co-blog">
            <div className="container">
              <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2>The media talk about us</h2>
                  <p>People always make their lives comfortable and complete, especially to meet their increasing needs.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src="/../../images/Kehoachhoctap.jpg" alt="" /></a>
                    <div className="blog-text">
                      <h3><a href="#" >"Assign assignments" online - an extremely useful application for teachers and students in...</a></h3>
                      <span className="posted_on">Nov. 15th</span>
                      <span className="comment"><a href>21<i className="icon-speech-bubble" /></a></span>
                      <p>Over the past time, the global Covid-19 epidemic has affected all areas of life, education and training is no exception.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div> 
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src="../../images/anhdaidien.jpg" alt="" /></a>
                    <div className="blog-text">
                      <h3><a href ="#">CTE-Learning – The software that connects families and schools won the title of Sao Khue 2021 (Giaoducthoidai.vn)</a></h3>
                      <span className="posted_on">Nov. 15th</span>
                      <span className="comment"><a href>21<i className="icon-speech-bubble" /></a></span>
                      <p>On the morning of April 24, at the Sao Khue Awards 2021, the online communication software between Families and Schools - CTE-Learning of Quang Ich Software Joint Stock Company appeared...</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div> 
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src="../../images/anhdaidien1.jpg" alt="" /></a>
                    <div className="blog-text">
                      <h3><a href ="#">4Ho Chi Minh City: Many schools publicize day-boarding menus through the CTE-Learning application</a></h3>
                      <span className="posted_on">Nov. 15th</span>
                      <span className="comment"><a href>21<i className="icon-speech-bubble" /></a></span>
                      <p>Education & Training - School meals make up an important part of the actual daily diet of students. The publicity of the menu of semi-boarding meals helps the school build a scientific nutrition regimen, and the students' parents feel more secure.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Blog;