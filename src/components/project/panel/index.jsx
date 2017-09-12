import React from 'react';
import classNames from 'classnames';

import OutboundLink from '../../outbound-link';
import Wrapper from '../../wrapper';

import themeStyles from '../themes.module.css';
import styles from './styles.module.css';

const ProjectPanel = ({ project }) => (
  <OutboundLink
    to={`https://github.com/${project.link}`}
    className={classNames(styles.panel, themeStyles[project.theme.light ? 'light' : 'dark'], styles[project.className])}
    style={{ background: `${project.theme.background}` }}
  >
    <Wrapper>
      <div className={styles.inner} style={{ backgroundImage: `url(${project.cover})` }}>
        <div className={styles.content}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </Wrapper>
  </OutboundLink>
);

export default ProjectPanel;
