import { combineReducers } from 'redux';
import { PUT_HERO, PUT_LIST, LOAD_HERO } from './actions';

const initialState = {
  characters: [],
  pages: null,
  hero: {},
  nextPage: 'https://rickandmortyapi.com/api/character?page=1'
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LIST:
      return {
        ...state,
        characters: [...state.characters, ...action.characters],
        pages: action.pages,
        nextPage: action.nextPage
      };
    case LOAD_HERO:
      return {
        ...state,
        hero: {}
      };
    case PUT_HERO:
      return {
        ...state,
        hero: action.hero
      };
    default:
      return state;
  }
}

const reducer = combineReducers({ data });

export default reducer;