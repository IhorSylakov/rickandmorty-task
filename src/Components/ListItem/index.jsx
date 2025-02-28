import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 10px;
  font-weight: 500;
  box-shadow: 0 0 10px var(--theme-color);
  background-color: ${(props) => {
    switch (props.$gender) {
      case 'Male':
        return 'lightblue'
      case 'Female':
        return 'pink'
      default:
        return 'lightyellow'
    }
  }};
`;

const Image = styled.img`
  height: auto;
  aspect-ratio: 1/1;
  width: clamp(120px, 45%, 150px);
`;

const Description = styled.div`
  margin: 10px;
  max-width: 55%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  overflow-wrap: break-word;
`;

function ListItem({hero}) {
  const {
    id,
    image,
    name,
    gender,
  } = hero;

  return (
    <li>
      <StyledLink
        to={`/character/${id}`}
        className="hasZoomAnim"
        $gender={gender}
      >
        <Image
          src={image}
          alt={`It shows what ${name} looks like`}
          width={132}
          height={132}
          loading="lazy"
        />
        <Description>
          {name}
        </Description>
      </StyledLink>
    </li>
  );
}

export default ListItem;
