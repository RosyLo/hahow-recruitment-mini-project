import { put, takeEvery, call } from 'redux-saga/effects';

export const FFETCH_HERO_BEGIN = 'FFETCH_HERO_BEGIN';

export const fetchHeroBegin = () => ({
  type: FFETCH_HERO_BEGIN,
});

export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';

const fetchHeroSuccess = (data: any) => ({
  type: FETCH_HERO_SUCCESS,
  payload: {
    data,
  },
});

function* fetchHeroList() {
  const data: ResponseGenerator = yield call(
    apiFetch,
    'https://hahow-recruit.herokuapp.com/heroes'
  );
  yield put(fetchHeroSuccess(data));
}

function* actionWatcher() {
  yield takeEvery(FFETCH_HERO_BEGIN, fetchHeroList);
}

export default actionWatcher;

export function apiFetch<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json().then((data) => data as T);
  });
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
