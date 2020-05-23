import React from 'react';

import './drawer.styles.scss';

import { useStoreValue } from '../../store';
import TopCountries from '../top-countries/top-countries.component';

const Drawer = ({ ...props }) => {
  const {
    state: { drawerOpened },
  } = useStoreValue();

  return (
    <div className={`drawer ${drawerOpened ? 'opened' : ''}`} tabIndex="0">
      <div className="top-countries-container">
        <TopCountries />
      </div>
    </div>
  );
};

export default Drawer;
