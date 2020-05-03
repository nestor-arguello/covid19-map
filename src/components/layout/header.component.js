import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.styles.scss';

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='title-container'>
      <h3>
        <Link to='/' className='link'>
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
