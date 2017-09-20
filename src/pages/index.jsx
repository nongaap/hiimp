import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import styles from './styles.module.css';

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hi. I’m <Link className={styles.bracklink} to="/about">{'{'}Mike{'}'}</Link> P.
          <br />
          <br />
          I’m a software developer & tech analyst.
          <br />
          <br />
          Check out some of my <Link className={styles.link} to="/projects">projects</Link>.
        </h1>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;
