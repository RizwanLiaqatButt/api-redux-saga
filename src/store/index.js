import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import imagesSaga from '../sagas/index';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(imagesSaga);
    //store.dispatch({ type: 'IMAGES_LOAD' });
    return store;
};

export default configureStore;
