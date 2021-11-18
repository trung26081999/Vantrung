import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeTeacher = () => {
  return (
    <>
      <div className="hometeacher">
        <div className="container">
          <h1>HomeTeacher</h1>
          <Link to="/News">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeTeacher;
