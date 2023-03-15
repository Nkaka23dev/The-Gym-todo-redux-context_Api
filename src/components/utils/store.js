import { configureStore, createSlice } from "@reduxjs/toolkit";

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
    tasks: savedTasks,
    taskName: "",
    TaskToEdit: {}
}
const useSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        changeTaskName: (state, action) => {
            state.taskName = action.payload;
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
        }
    }
})
export const {
    addTask,
    deleteTask,
    changeTaskName,
    changeTaskToEdit,
    editTask
} = useSlice.actions;

export const store = configureStore({
    reducer: {
        todo: useSlice.reducer
    }
})
store.subscribe(() => {
    localStorage.setItem('tasks', JSON.stringify(store.getState().todo.tasks));
});