// @flow

import * as React from 'react';
import styles from './App.scss';

type Props = {
  children: React.Node
};

const App = ({ children }: Props) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default App;
