import SideNav, { NavIcon, NavItem, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import {
  FaBook,
  FaBriefcase,
  FaBullhorn,
  FaCalendarAlt,
  FaCheckSquare,
  FaCogs,
  FaComments,
  FaHouseUser,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
        className="sidenav"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FaHouseUser className="sidenav__icon" />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="profile">
            <NavIcon>
              <FaUser className="sidenav__icon" />
            </NavIcon>
            <NavText>Profile</NavText>
          </NavItem>
          <NavItem eventKey="announcements">
            <NavIcon>
              <FaBullhorn style={{ fontSize: '1.80em', marginTop: '10px' }} />
            </NavIcon>
            <NavText>Announcements</NavText>
          </NavItem>
          <NavItem eventKey="calendar">
            <NavIcon>
              <FaCalendarAlt className="sidenav__icon" />
            </NavIcon>
            <NavText>Calendar</NavText>
            <NavItem eventKey="calendar/schedule">
              <NavText>Schedule</NavText>
            </NavItem>
            <NavItem eventKey="calendar/personalCalendar">
              <NavText>Personal Calendar</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="assignment">
            <NavIcon>
              <FaBriefcase className="sidenav__icon" />
            </NavIcon>
            <NavText>Assignment</NavText>
          </NavItem>
          <NavItem eventKey="quizz">
            <NavIcon>
              <FaCheckSquare className="sidenav__icon" />
            </NavIcon>
            <NavText>Test and Quizzes</NavText>
          </NavItem>
          <NavItem eventKey="chatroom">
            <NavIcon>
              <FaComments style={{ fontSize: '2em', marginTop: '10px' }} />
            </NavIcon>
            <NavText>Chatroom</NavText>
          </NavItem>
          <NavItem eventKey="teamworking">
            <NavIcon>
              <FaUsers className="sidenav__icon" />
            </NavIcon>
            <NavText>Team Working</NavText>
          </NavItem>
          <NavItem eventKey="gradebook">
            <NavIcon>
              <FaBook className="sidenav__icon" />
            </NavIcon>
            <NavText>Gradebook</NavText>
          </NavItem>
          <NavItem eventKey="support">
            <NavIcon>
              <FaCogs style={{ fontSize: '2.35em', marginTop: '10px' }} />
            </NavIcon>
            <NavText>Support technical</NavText>
          </NavItem>
          <NavItem eventKey="signout">
            <NavIcon>
              <FaSignOutAlt style={{ fontSize: '2em', marginTop: '10px' }} />
            </NavIcon>
            <NavText>Sign Out</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default Sidebar;
