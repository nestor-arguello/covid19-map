import React from 'react';

import './footer.styles.scss'

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Made by&nbsp;
    <a href='https://nestor-arguello.github.io'>Néstor Argüello</a>
  </footer>
);

export default Footer;