import React, { Component } from "react";

class Container_3 extends Component {
  render() {
    return (
      <div id="fh5co-steps">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Start A Course</h2>
              <p>
                <br />
                To start an CTE-Learning course, please do the following:
                <br />
                <br />• Register or Login to your CTE-Learning Account
                <br />
                <br /> • Once you log in, you can search for a course by going
                to that page
                <br />
                <br /> • Select the course you want to study and select "Start
                Now"
                <br />
              </p>
            </div>
          </div>
          <div
            className="row bs-wizard animate-box"
            style={{ borderBottom: 0 }}
          >
            <div className="col-xs-3 bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">
                <h4>Step 1</h4>
              </div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a href="#" className="bs-wizard-dot" />
              <div className="bs-wizard-info text-center">
                <p>Create A Free Course</p>
              </div>
            </div>
            <div className="col-xs-3 bs-wizard-step active">
              {/* complete */}
              <div className="text-center bs-wizard-stepnum">
                <h4>Step 2</h4>
              </div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a href="#" className="bs-wizard-dot" />
              <div className="bs-wizard-info text-center">
                <p>Upload Content</p>
              </div>
            </div>
            <div className="col-xs-3 bs-wizard-step disabled">
              {/* complete */}
              <div className="text-center bs-wizard-stepnum">
                <h4>Step 3</h4>
              </div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a href="#" className="bs-wizard-dot" />
              <div className="bs-wizard-info text-center">
                <p>Make Your Course Beautiful</p>
              </div>
            </div>
            <div className="col-xs-3 bs-wizard-step disabled">
              {/* active */}
              <div className="text-center bs-wizard-stepnum">
                <h4>Step 4</h4>
              </div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a href="#" className="bs-wizard-dot" />
              <div className="bs-wizard-info text-center">
                <p>Start Making Money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container_3;
