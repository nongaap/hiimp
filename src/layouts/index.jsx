import React from 'react';

import Header from '../components/header';

import styles from './styles.module.css';
import '../css/reset.css';
import '../css/document.css';
import '../css/typography.css';

const Layout = ({ children, location }) => {
  const appChildren = process.env.NODE_ENV === 'production' ? children({ location }) : children();

  return (
    <div>
      <Header />
      <div className={styles.page}>{appChildren}</div>
    </div>
  );
};

export default Layout;
