import { UnorderedListOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { RegisterDropdown } from './MenuDropdown';
import { Avatar, Badge, Dropdown } from 'antd';


const Navigation = () => {
  
  const [visible, setVisible] = React.useState(false);
  

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="header__navigation">
      <div className="tableHidden">
        <ul className="header__navigation--WrapItem">
          <li>
          <Link to="/News/home">Home</Link>
          </li>
          <li>
            <Link>Schedule</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link to="News">News</Link>
          </li>
          <li>
          <Dropdown overlay={RegisterDropdown} placement="bottomCenter" arrow >
          <Link to="/News/login">Sign In</Link>
          </Dropdown>
          </li>
          <li>
            <Link to="/News/support">Support</Link>
          </li>
          
        </ul>
        
      </div>
      <div className="tableVisible">
        <UnorderedListOutlined style={{ fontSize: '30px', color: '#fff' }} onClick={showDrawer} />
        <Drawer title="Menu" placement="left" onClose={onClose} visible={visible}>
        <li>
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link>Schedule</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link to="News">News</Link>
          </li>
          <li>
          <Dropdown overlay={RegisterDropdown} placement="bottomCenter" arrow >
            <Link to="/News/login">Sign In</Link>
          </Dropdown>
          </li>
          <li>
            <Link to="Support">Support</Link>
          </li>
        </Drawer>
      </div>
    </div>
  );
};

export default Navigation;
