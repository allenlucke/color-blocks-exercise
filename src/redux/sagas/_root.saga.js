import { all } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';
//Imported sagas
import getBlocksSaga from './getBlocks.saga';
import deleteBlockSaga from './deleteBlock.saga';
import getColorsSaga from './getColors.saga';
import addBlockSaga from './addBlock.saga';
//Watcher Saga
function* rootSaga() {
    yield takeEvery('GET_BLOCK', getBlocksSaga)
    console.log('In root saga')
    yield all(
        [
            getBlocksSaga(),
            deleteBlockSaga(),
            getColorsSaga(),
            addBlockSaga(),
        ]
    );
}

export default rootSaga;