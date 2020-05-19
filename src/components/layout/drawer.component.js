import React from 'react';

import './drawer.styles.scss';
import { useStoreValue } from '../../store';

const Drawer = ({ ...props }) => {
  const {
    state: { drawerOpened },
  } = useStoreValue();

  return (
    <div className={`drawer ${drawerOpened ? 'opened' : ''}`}>
      <div>top countries list</div>
    </div>
  );
};

export default Drawer;
