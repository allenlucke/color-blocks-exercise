import { all } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';
//Imported sagas
import getBlocksSaga from './getBlocks.saga';
import deleteBlockSaga from './deleteBlock.saga';
//Watcher Saga
function* rootSaga() {
    // yield takeEvery('GET_BLOCKS', getBlocksSaga)
    console.log('In root saga')
    yield all(
        [
            getBlocksSaga(),
            deleteBlockSaga(),
        ]
    );
}

export default rootSaga;