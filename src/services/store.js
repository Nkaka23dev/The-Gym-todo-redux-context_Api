import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';
import taskNameSlice from './taskNameSlice'

const rootReducer = combineReducers({
    tasks: taskSlice,
    taskName: taskNameSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

store.subscribe(() => {
    localStorage.setItem('tasks', JSON.stringify(store.getState().tasks.tasks));
});

export default store;
