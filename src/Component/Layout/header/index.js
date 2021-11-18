import {
  CloseOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Dropdown } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../Assets/Logo list/logo.png';
import { RegisterDropdown } from './MenuDropdown';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import facebook from '../../../Assets/Logo list/f.png';
import youtube from '../../../Assets/Logo list/ellipse-5-copy-2.png';
const Header = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleShowFormSearch = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="header">
      <div className="container wrap--heading">
        <div className="tableHidden ">
          <div className="header__logo">
            <Link to="/">
              <img src={LogoImage} alt="" />
            </Link>
          </div>
        </div>

        {!isShow ? <Navigation /> : <SearchBar />}

        <div className="tableVisible ">
          <SearchBar />
        </div>

        <div className="header__iconShortCut">
          {!isShow ? (
            <SearchOutlined onClick={handleShowFormSearch} />
          ) : (
            <CloseOutlined className="btn--cancelFormSearch" onClick={handleShowFormSearch} />
          )}
        </div>
        <div className="social">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Header;
