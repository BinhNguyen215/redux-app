import { put, takeLatest } from "redux-saga/effects";

function* afterIncrease(action) {
    try {
        console.log('Counter Saga', action);

        const random = Math.floor(Math.random() * 5);
        if (random === 0) {
            throw new Error('Random = 0');
        }

        // Put vào store
        yield put({ type: "COMMIT_INCREMENT", payload: action.payload });
    } catch (error) {
        console.error('Counter Saga', error);
        yield put({ type: "ROLLBACK_INCREMENT" });
    }
}

function* watchIncrement() {
    yield takeLatest("INCREMENT", afterIncrease);
}

const counterSagas = [
    watchIncrement,
];

export default counterSagas;

