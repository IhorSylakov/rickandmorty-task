import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";

function ListItem({hero}) {
  const {
    id,
    image,
    name,
  } = hero;

  return (
    <li>
      <Link to={`/rickandmorty-task/character/${id}`} className={styles.link}>
        <img src={image} className={styles.image} alt={name}/>
        <div className={styles.description}>
          <div>{name}</div>
        </div>
      </Link>
    </li>
  );
}

export default ListItem;
