import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../Actions/index";

function* handleAddTask(action) {
  yield put(actions.addTask(action.payload));
}

function* handleDeleteTask(action) {
  yield put(actions.deleteTask(action.payload));
}

function* handleUpdateTask(action) {
  yield put(actions.updateTask(action.payload));
}

function* watchTaskActions() {
  yield takeEvery("ADD_TASK_ASYNC", handleAddTask);
  yield takeEvery("DELETE_TASK_ASYNC", handleDeleteTask);
  yield takeEvery("UPDATE_TASK_ASYNC", handleUpdateTask);
}

export default watchTaskActions;
