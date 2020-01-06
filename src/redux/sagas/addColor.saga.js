import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addColor(action) {
    console.log('In addColor');
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/colors',
            data: action.payload
        })
    } catch(err) {
        console.log('Error posting color', err);
    }
}
function* addColorSaga() {
    yield takeLatest('ADD_COLOR', addColor);
}

export default addColorSaga;