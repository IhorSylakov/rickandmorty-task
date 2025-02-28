import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  flex: 1 0 auto;
  display: flex;
  padding: var(--main-gap);
  box-sizing: border-box;
  flex-direction: column;
`;

export const Content = styled.div`
  gap: var(--main-gap);
  display: flex;
  flex-wrap: wrap;
`;

export const ContentImage = styled.img`
  height: auto;
  aspect-ratio: 1/1;
  align-self: flex-start;
  width: clamp(200px, 33%, 300px);
`;

export const ContentDescription = styled.div`
  overflow: hidden;
  flex: 1 0 min(100%, 400px);
`;

export const ErrorTitle = styled.h1`
  margin: auto;
  transform: scale(3);
`;
