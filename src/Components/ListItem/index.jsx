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
      <Link to={`/character/${id}`} className={styles.link}>
        <img
          src={image}
          className={styles.image}
          alt={`This image shows what ${name} looks like`}
          width={132}
          height={132}
          loading="lazy"
        />
        <div className={styles.description}>
          {name}
        </div>
      </Link>
    </li>
  );
}

export default ListItem;
