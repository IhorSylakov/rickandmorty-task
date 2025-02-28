import React from 'react';
import ListItem from '../ListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-gap: var(--main-gap);
  grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
`;

function List({ characters }) {
  return (
    <StyledList>
      {characters && characters.map(hero =>
        <ListItem key={hero.id} hero={hero} />
      )}
    </StyledList>
  );
}

export default List;
