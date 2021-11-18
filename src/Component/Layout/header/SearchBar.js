import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {

 
  return (
    <>
      <div className="container__search ">
        <input
          type="text"
          className="container__search--input"
          placeholder="Search entiere store here..."
        />
        <SearchOutlined className="container__search--icon" htmlType="submit" />
      </div>
    </>
  );
};

export default SearchBar;
