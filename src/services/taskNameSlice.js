import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskName: '',
};

const taskNameSlice = createSlice({
    name: 'taskName',
    initialState,
    reducers: {
        changeTaskName: (state, action) => {
            state.taskName = action.payload;
        },
    },
});

export const { changeTaskName } = taskNameSlice.actions;

export default taskNameSlice.reducer;
