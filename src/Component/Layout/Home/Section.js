import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div id="fh5co-explore" className="fh5co-bg-section">
  <div className="container">
    <div className="row animate-box">
      <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
        <h2>Take A Course</h2>
        <p>CTE-Learning is an online learning and online exam application built for the purpose of providing a modern and effective learning environment for students, teachers and schools. The application helps students learn online with many benefits for schools, teachers and students. </p>
      </div>
    </div>
  </div>		
  <div className="fh5co-explore fh5co-explore1">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-push-5 animate-box">
          <img className="img-responsive" src="../../images/work_1.png" alt="work" />
        </div>
        <div className="col-md-4 col-md-pull-8 animate-box">
          <div className="mt">
            <h3>We Want You To Learn</h3>
            <p>Advantages of CTE-Learning</p>
            <ul className="list-nav">
              <li><i className="icon-check2" />Learn online with thousands of online courses for all levels of study</li>
              <li><i className="icon-check2" />Practice taking exams of online subjects as required by the teacher</li>
              <li><i className="icon-check2" />Monitor student learning outcomes Easily communicate with teachers right on the software</li>
            </ul>
            <p><a className="btn btn-primary btn-lg popup-vimeo btn-video" href="https://vimeo.com/channels/staffpicks/93951774"><i className="icon-play" /> Watch Video</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="fh5co-explore">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-pull-1 animate-box">
          <img className="img-responsive" src="../../images/work_1.png" alt="work" />
        </div>
        <div className="col-md-4 animate-box">
          <div className="mt">
            <div>
              <h4><i className="icon-user" />Support teacher-student interaction</h4>
              <p>Support interaction between teachers and students through Whiteboard, Livestream, Chat... </p>
            </div>
            <div>
              <h4><i className="icon-video2" />Support a variety of learning materials</h4>
              <p>The solution supports many different types of documents such as: Video, PowerPoint, PDF... </p>
            </div>
            <div>
              <h4><i className="icon-shield" />Issuance/Confirmation of academic certificates</h4>
              <p>Using Blockchain technology to issue and invent certificates that students gain in learning. </p>
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

export default Section;