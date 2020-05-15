import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.styles.scss';

import covidLogo from '../../images/covid-logo.svg';
import searchIcon from '../../images/search-icon.svg';

import SearchBar from '../search-bar/search-bar.component';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="title-container">
      <h3 className="title">
        <img src={covidLogo} alt="covid-logo" />
        <Link to="/" className="link">
          {siteTitle}
        </Link>
      </h3>
    </div>
    <div className="search-bar">
      <SearchBar />
      {/* <img className="search-icon" src={searchIcon} alt="search-icon" /> */}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
