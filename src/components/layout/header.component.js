import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.styles.scss';

import covidLogo from '../../images/covid-logo.svg';
import chartIcon from '../../images/bar-chart.svg';

import SearchBar from '../search-bar/search-bar.component';
import { useStoreValue } from '../../store';
import { toggleDrawer } from '../../actions';

const Header = ({ siteTitle }) => {
  const {
    state: { drawerOpened },
    dispatch,
  } = useStoreValue();

  const handleClick = () => {
    dispatch(toggleDrawer());
  };

  return (
    <header className="header">
      <div className="title-container">
        <h3 className="title">
          <img src={covidLogo} alt="covid-logo" />
          <Link to="/" className="link">
            {siteTitle}
          </Link>
        </h3>
      </div>

      <div className="search-bar-container">
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>

      <div className="drawer-btn-container">
        <div className={`drawer-btn ${drawerOpened ? 'opened' : ''}`} onClick={handleClick}>
          <img src={chartIcon} alt="Chart" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
