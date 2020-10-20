import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Contacts.module.css';
import fade from './fade.module.css';

export default function Layout({ title, children }) {
  return (
    <CSSTransition in={true} appear timeout={700} classNames={fade}>
      {stage => {
        return (
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <CSSTransition
                in={stage === 'entered'}
                timeout={500}
                classNames={fade}
                unmountOnExit
              >
                <h2 className={styles.sectionTitle}>{title}</h2>
              </CSSTransition>
            </div>

            <div>{children}</div>
          </div>
        );
      }}
    </CSSTransition>
  );
}
