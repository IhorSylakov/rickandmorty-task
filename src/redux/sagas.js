import { put, call, takeEvery, all } from 'redux-saga/effects';
import { LOAD_LIST, putList, LOAD_HERO, putHero } from './actions';

function fetchHeroesList(page) {
  return fetch(page)
    .then(res => res.json())
}

function* workerLoadList(action) {
  const data = yield call(fetchHeroesList, action.payload.page)
  yield put(putList(data))
}

function* watchLoadList() {
  yield takeEvery(LOAD_LIST, workerLoadList)
}

function fetchHeroInfo(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
}

function* workerLoadHero(action) {
  const data = yield call(fetchHeroInfo, action.payload.id)
  yield put(putHero(data))
}

function* watchLoadHero() {
  yield takeEvery(LOAD_HERO, workerLoadHero)
}

export default function* rootSaga() {
  yield all([
      watchLoadList(),
      watchLoadHero()
  ]);
}
