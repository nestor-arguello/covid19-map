import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import covidLogo from '../../images/covid-logo.svg';

import './header.styles.scss';

import Logo from '../logo/logo.component';

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
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
