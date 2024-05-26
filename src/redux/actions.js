export const LOAD_LIST = 'LOAD_LIST';
export const PUT_LIST = 'PUT_LIST';
export const LOAD_HERO = 'LOAD_HERO';
export const PUT_HERO = 'PUT_HERO';

export const putList = (dataFromServer) => {
  return {
    type: PUT_LIST,
    characters: dataFromServer.results,
    pages: dataFromServer.info.pages,
    nextPage: dataFromServer.info.next
  }
};

export const loadList = (page) => {
  return {
    type: LOAD_LIST,
    payload: { page }
  }
};

export const putHero = (dataFromServer) => {
  return {
    type: PUT_HERO,
    id: dataFromServer
  }
};

export const loadHero = (id) => {
  return {
    type: LOAD_HERO,
    payload: { id }
  }
};
