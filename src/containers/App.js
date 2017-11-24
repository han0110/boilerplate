// @flow

import React from 'react';
import styles from './App.scss';

const App = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default App;
