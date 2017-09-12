import React from 'react';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import { ProjectPanel } from '../../components/project';
import Wrapper from '../../components/wrapper';

import projects from '../../data/projects';

import styles from './styles.module.css';

const Project = ({ location }) => (
  <div>
    <Meta title="Projects" description="Web applications built by or collaboratively with Mike Puangmalai." location={location} />

    {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

    <div className={styles.contact}>
      <Wrapper>
        <Contact title="Your project here?" />
      </Wrapper>
    </div>
  </div>
);

export default Project;
