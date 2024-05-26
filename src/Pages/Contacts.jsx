import React, { Fragment } from 'react';
import styles from "./layout.module.css";

const Contacts = () => (
  <Fragment>
    <h1>You can get in touch with me:</h1>
    <div className={styles.content}>
      <dl>
        <dt>linkedIn:</dt>
        <dd><a href="https://www.linkedin.com/in/igor-silakov-92854285">https://www.linkedin.com/in/igor-silakov-92854285</a></dd>
        <dt>github:</dt>
        <dd><a href="https://github.com/IhorSylakov">https://github.com/IhorSylakov</a></dd>
        {/* <dt>gitlab:</dt>
        <dd><a href="https://gitlab.com/users/silakov1/projects">https://gitlab.com/users/silakov1/projects</a></dd> */}
        {/* <dt>skype:</dt>
        <dd><a href="skype:isilakov85?chat">isilakov85</a></dd> */}
        <dt>telegram:</dt>
        <dd><a href="tg://resolve?domain=igor_silakov">igor_silakov</a></dd>
      </dl>
    </div>
  </Fragment>
)

export default Contacts
