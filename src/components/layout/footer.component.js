import React from 'react';

import './footer.styles.scss'

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()}, made with ♥ by&nbsp;
    <a href='https://nestor-arguello.github.io'>Néstor Argüello</a>
  </footer>
);

export default Footer;