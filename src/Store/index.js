import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import tasksReducer from '../Reducers/tasks';
import taskSagas from '../Sagas/taskSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(tasksReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(taskSagas);

export default store;
