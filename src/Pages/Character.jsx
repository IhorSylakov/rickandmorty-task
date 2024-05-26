import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./layout.module.css";

import { loadHero } from '../redux/actions';

const Character = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    image,
    name,
    status,
    gender,
    species,
  } = useSelector(state => state.data.hero);

  useEffect(() => {
    dispatch(loadHero(+id));
  }, [dispatch, id]);

  return (
    <>
      <h1>{name}</h1>
      <div className={styles.content}>
        <img src={image} className={styles.contentImage} alt={name} />
        <div className={styles.contentDescription}>
          <dl>
            <dt>status:</dt>
            <dd>{status}</dd>
            <dt>gender:</dt>
            <dd>{gender}</dd>
            <dt>species:</dt>
            <dd>{species}</dd>
          </dl>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
        </div>
      </div>
    </>
  );
};

export default Character;
