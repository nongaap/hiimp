import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../components/content-page';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import styles from './styles.module.css';
import gifSrc from './img/one-punch.gif';

const FourOhFour = ({ location }) => (
  <ContentPage>
    <Meta title="404" description="Page not found." noIndex location={location} />
    <Wrapper>
      <div className={styles.fourohfour}>
        <h1>Oops.</h1>
        <p>Page not found at the this time. Did you want to view <Link to="/projects">my projects</Link>?</p>
        <img src={gifSrc} alt="One punch 404" />
        <p>100 push-ups, 100 sit-ups, 100 squats, and a 10km run. EVERY SINGLE DAY!!!</p>
      </div>
    </Wrapper>
  </ContentPage>
);

export default FourOhFour;
