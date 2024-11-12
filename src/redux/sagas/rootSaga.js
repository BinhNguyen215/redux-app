import { all, fork } from 'redux-saga/effects';
import counterSaga from './counterSaga';

const allSaga = [
	...counterSaga,
];

function* rootSagas() {
	yield all(allSaga.map((saga) => fork(saga)))
}

export default rootSagas;
