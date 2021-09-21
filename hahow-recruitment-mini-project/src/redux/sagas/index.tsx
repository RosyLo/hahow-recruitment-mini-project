import { all } from 'redux-saga/effects';
import actionWatcher from '../actions/fetchHeros';

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
