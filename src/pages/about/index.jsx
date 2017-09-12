import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import homedelegate from './img/homedelegate.png';
import meetup from './img/meetup.png';
import medium from './img/medium.png';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I’m a software developer & investment analyst currently based in Los Angeles, California.</p>
          <p>I first began my journey into code a couple years ago doing coding challenges for fun and just kept going. Before I knew it, I was spending more time in Atom than in Excel for my day job (I love spreadsheets too).</p>

          <p>I’m now a full stack javascript developer and love to build. I’m a fan of React, Serverless Architecture, and Test Driven Development.  Previously, I was an investment profesional at <OutboundLink to="https://medium.com/nongaap/dozen-things-i-learned-from-ralph-whitworth-on-investing-activism-and-business-71cefb78880b">Relational Investors</OutboundLink> covering the tech sector. I’ve had the pleasure of covering the tech industry for 10 years. If you need someone to code, do customer development, or run a financial analysis let's chat.</p>

          <p>I now work on a freelance basis working on my own ideas and others. If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>CSS, HTML, SASS</p>
            <h4>Javascript</h4>
            <p>Gulp, Grunt, React, React Native, Redux, Webpack</p>
            <h4>Server</h4>
            <p>Express, Mongo, Node, SQL</p>
            <h4>Other</h4>
            <p>Chai, Mocha, Test Driven Development</p>
          </div>

        </aside>
      </div>

      <section>
        <h2 className={styles.interests}>Personal Interests</h2>
        <div className={styles.interests}>
          <div className={styles.interest}>
            <img src={medium} alt="Medium logo" />
            <div>
              <h4><OutboundLink to="https://medium.com/nongaap">NonGAAP Blog</OutboundLink></h4>
              <p>I enjoy writing about software development, tech analysis, and valuation. Topics range from understanding revenue multiple to writing mocha tests.</p>
            </div>
          </div>

          <div className={styles.interest}>
            <img src={meetup} alt="Meetup logo" />
            <div>
              <h4><OutboundLink to="https://www.meetup.com/Fullstack-Tech-Business-Strategy-LA/">Fullstack Tech Business & Strategy LA</OutboundLink></h4>
              <p>I organize a meetup to help software developers gain a better understanding of the "business & investing side" of tech. Everyone is welcome to attend that wants to improve and learn. We go under the hood of core concepts including valuation, unit economics, business models, strategy, and more through workshops, group talks, and presentations.</p>
            </div>
          </div>

          <div className={styles.interest}>
            <img src={homedelegate} alt="Homedelegate logo" />
            <div>
              <h4><OutboundLink to="http://www.homedelegate.com/">Home Delegate</OutboundLink></h4>
              <p>I've spent much of my life sorting out the various nooks and crannies of life and paperwork for my parents. From financial planning to insurance to mortgages to social security, I know firsthand the challenges of finding the right answers and people who can be trusted. Home Delegate is a passion project to help others find the right answers and service professionals.</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
