import { createSlice } from '@reduxjs/toolkit';

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
    tasks: savedTasks,
    TaskToEdit: {},
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        changeTaskToEdit: (state, action) => {
            state.TaskToEdit = action.payload;
        },
        deleteTask: (state, action) => {
            const newTask = state.tasks.filter((task) => task.id !== action.payload);
            state.tasks = newTask;
            localStorage.setItem('tasks', JSON.stringify(newTask));
        },
        editTask: (state, action) => {
            const editedTasks = state.tasks.map((task) =>
                task.id === action.payload.id ? { ...task, name: action.payload.name } : task
            );
            state.tasks = editedTasks;
            localStorage.setItem("tasks", JSON.stringify(editedTasks));
        },
        changeCheckedTask: (state, action) => {
            const { id } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.checkedTask = true;
            }
        },
    }
});

export const {
    addTask,
    deleteTask,
    changeTaskToEdit,
    editTask,
    changeCheckedTask } = tasksSlice.actions;

export default tasksSlice.reducer;
