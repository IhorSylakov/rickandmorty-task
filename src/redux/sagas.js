import { put, call, takeEvery, all } from 'redux-saga/effects';
import { LOAD_LIST, putList, LOAD_HERO, putHero } from './actions';

export function fetchHeroesList(page) {
  return fetch(page)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error loading list: ${res.status}`);
      }
      return res.json();
    })
    .catch(error => {
      console.error("Error fetch list:", error);
      return { results: [], info: { pages: 0, next: null } };
    });
}

export function* workerLoadList(action) {
  try {
    const data = yield call(fetchHeroesList, action.payload.page);
    yield put(putList(data));
  } catch (error) {
    console.error("Error load list characters:", error);
  }
}

function* watchLoadList() {
  yield takeEvery(LOAD_LIST, workerLoadList)
}

export function fetchHeroInfo(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error loading hero: ${res.status}`);
      }
      return res.json();
    })
    .catch(error => {
      console.error("Error fetch hero:", error);
      return { id, name: "Unknown character", status: "Unknown", species: "Unknown" };
    });
}

export function* workerLoadHero(action) {
  try {
    const data = yield call(fetchHeroInfo, action.payload.id);
    yield put(putHero(data));
  } catch (error) {
    console.error("Error load character:", error);
  }
}

function* watchLoadHero() {
  yield takeEvery(LOAD_HERO, workerLoadHero)
}

export default function* rootSaga() {
  yield all([
    watchLoadList(),
    watchLoadHero(),
  ]);
}

