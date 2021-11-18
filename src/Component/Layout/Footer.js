import {
  FacebookOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  HistoryOutlined,
  MailOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';
import logo from '../../Assets/Logo list/logo.png';

const Footer = () => {
  const [activeInfo, setActiveInfo] = React.useState(false);
  const [activeAddress, setActiveAddress] = React.useState(false);
  const toggleClass = (name) => {
    if (name === 'info') {
      setActiveInfo(!activeInfo);
    }
    if (name === 'Address') {
      setActiveAddress(!activeAddress);
    }
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__SignUpNews">
          <div className="Footer__SignUpNews--title">
            <h2>Sign Up To Our Website.</h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div className="Footer__SignUpNews--form">
            <Input className="input--email" placeholder="Enter your email..." />
            <Button className="btn--subscribe" type="primary" shape="round" size={14}>
              Subscribe
            </Button>
          </div>
        </div>
        <div className="Footer__information">
          <div className="Footer__information--founder">
            <img src={logo} alt="logo" />
          </div>
          <div className="Footer__information--about">
            <div className="wrap__title" onClick={() => toggleClass('info')}>
              <h2 style={{ marginLeft: '39px' }}>QUICK ACCESS</h2>
              <hr style={{ width: '100px', display: 'float', float: 'left', marginLeft: '39px' }} />
            </div>
            <ul className={`show ${!activeInfo ? 'hide-md' : 'show-md'}`}>
              <li>
                <span>
                  <SendOutlined style={{ paddingRight: '10px', width: '25px' }} />
                </span>
                Support Department 
              </li>
              <li>
                <span>
                  <SendOutlined style={{ paddingRight: '10px', width: '25px' }} />
                </span>
                Manual For Users
              </li>
            </ul>
          </div>
          <div className="Footer__information--address">
            <div className="wrap__title" onClick={() => toggleClass('Address')}>
              <h2 style={{ marginLeft: '39px' }}>CONTACT US </h2>
              <hr style={{ width: '100px', display: 'float', float: 'left', marginLeft: '39px' }} />
            </div>
            <ul className={`show ${!activeAddress ? 'hide-md' : 'show-md'}`}>
              <li>
                <span>
                  <EnvironmentOutlined style={{ paddingRight: '10px', width: '25px' }} />
                </span>
                Address: Duytan University, NVL Street 254, Thanh khe District, Da Nang City
              </li>
              <li>
                <span>
                  <WhatsAppOutlined style={{ paddingRight: '10px', width: '25px' }} />
                </span>
                Phone Number: <a>(+84) 0976 459 539</a>
              </li>
              <li>
                <span>
                  <HistoryOutlined style={{ paddingRight: '10px', width: '25px' }} />
                </span>
                We Are Open: Monday - Saturday: 8:00 AM - 5:30 PM
              </li>
              <li>
                <span>
                  <MailOutlined style={{ paddingRight: '10px', width: '25px' }} />
                </span>
                E-mail Support: <a>nguyentuankiet0105@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__social">
          <div className="Footer__social--socialNetwork">
            <FacebookOutlined className="iconFacebook" />
            <InstagramOutlined className="iconInstagram" />
          </div>
          <div className="Footer__social--copyright">
            <span>Copyright © 2021 C2.SE01</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
