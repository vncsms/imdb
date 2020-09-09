import React from 'react';
import ContainerStyle from './styles';
import { NavLink } from 'react-router-dom';

const Topbar: React.FC = () => {
  return (
    <ContainerStyle>
      <div className="inner-container">
        <div className="logo"></div>
        <div className="search-container"></div>
        <NavLink to="/register"> Sign IN</NavLink>
      </div>
    </ContainerStyle>
  );
};
export default Topbar;