import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from './WorkSpace_Sub/Calendar';
import HeaderWS from '../WorkSpace/WorkSpace_Sub/HeaderWS'

const HomeStudent = () => {
  return (
    <>
      <div className="homestudent">
        <div className="container">
          <HeaderWS/>
          <Sidebar />
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default HomeStudent;
