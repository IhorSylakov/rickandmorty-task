import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Content, ContentImage, ContentDescription } from "./SharedStyles";

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
      <Content>
        <ContentImage
          src={image}
          alt={name}
          width={300}
          height={300}
          loading="lazy"
        />
        <ContentDescription>
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
        </ContentDescription>
      </Content>
    </>
  );
};

export default Character;
