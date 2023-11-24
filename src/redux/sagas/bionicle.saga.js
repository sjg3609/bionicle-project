import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* bionicleSearch(action) {
    try {
       const bionicles = yield axios.get(`/api/bionicle/${action.payload}`);
        // yield axios.get(`/api/bionicle/${action.payload}`)
        yield put({ type: 'SET_BIONICLES', payload: bionicles.data });
        console.log('Checking bionicles data', bionicles.data);
    } catch (error) {
        console.log(`Error in GET for Bionicles ${error}`);
        alert('Something went wrong.')
    }   
}

function* bionicleSaga() {
    yield takeEvery('FETCH_BIONICLES', bionicleSearch);
}

export default bionicleSaga;