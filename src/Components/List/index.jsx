import React from 'react';
import ListItem from '../ListItem';
import styles from "./index.module.css";

function List({ characters }) {
  return (
    <ul className={styles.wrapper}>
      {characters && characters.map(hero =>
        <ListItem key={hero.id} hero={hero} />
      )}
    </ul>
  );
}

export default List;
