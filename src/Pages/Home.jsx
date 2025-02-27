import React, { useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadList } from '../redux/actions';
import List from '../Components/List';
import { debounce } from '../utils/Debounce';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.data.characters);
  const nextPage = useSelector(state => state.data.nextPage);

  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (characters.length === 0 && !hasFetchedData.current) {
      dispatch(loadList(nextPage));
      hasFetchedData.current = true;
    }
  }, [characters.length, dispatch, nextPage]);

  const debouncedHandleScroll = useMemo(() => debounce(() => {
    const threshold = 20;
    /* istanbul ignore next */
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - threshold
    ) {
      dispatch(loadList(nextPage));
    }
  }, 200), [dispatch, nextPage]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
    <>
      <h1>A list of Rick and Morty's characters</h1>
      <List characters={characters} />
    </>
  );
};

export default Home;
