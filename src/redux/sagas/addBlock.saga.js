import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBlock(action) {
    console.log('In addBlock');
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/blocks/',
            data: action.payload
        })
    } catch(err) {
        console.log('Error posting block', err);
    }
}
function* addBlockSaga() {
    yield takeLatest('ADD_BLOCK', addBlock);
}

export default addBlockSaga;