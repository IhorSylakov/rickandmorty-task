import React, { Fragment } from 'react';
import styles from "./layout.module.css";

const About = () => (
  <Fragment>
    <h1>About task</h1>
    <div className={styles.content}>
      <p>Based on the API <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>, implement a React application with a lazy-loaded list of characters from the animated series. A lazy-loaded list is one where elements are loaded from the backend in parts, i.e., when the scroll reaches the end of the page, the next part of the list is fetched, and so on, until the backend has no more data for us.</p>
      <ul>
        <li>Upon clicking on a character, the user should be redirected to a separate page with detailed information about that character.</li>
        <li>Use Redux for state management and Redux-Saga for asynchronous requests.</li>
        <li>Use SCSS or StyledComponents for styling.</li>
        <li>Tests are encouraged.</li>
      </ul>
    </div>
  </Fragment>
)

export default About
