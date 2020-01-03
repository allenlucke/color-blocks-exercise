import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteBlock(action) {
    console.log('In deleteBlock');
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'DELETE',
            url: '/api/blocks/'+action.payload,
            data: action.payload
        })
        // yield put({
        //     type: 'SET_DELETE_BLOCK',
        //     payload: action.payload.id
        // });
    } catch(err) {
        console.log('Error deleting block', err);
    }
}
function* deleteBlockSaga() {
    yield takeLatest('DELETE_BLOCK', deleteBlock);
}

export default deleteBlockSaga;