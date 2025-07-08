import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskItems: [],
    totalTasks: 0,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state,action) => {
            state.taskItems.push(action.payload);
            state.totalTasks += 1;     
        },
        removeTask: (state, action) => {
            state.taskItems = state.taskItems.filter(
                (task) => task.id !== action.payload);
        },
        clearTasks: (state) => {
            state.taskItems = [];
            state.totalTasks = 0;
        },
        calculateTotalTasks: (state) => {
            state.totalTasks = state.taskItems.length;
        },
    },
});

export const { addTask, removeTask, clearTasks, calculateTotalTasks } = taskSlice.actions;
export default taskSlice.reducer;

// This code defines a Redux slice for managing tasks in a task manager application.
// It includes actions to add, remove, clear tasks, and calculate the total number of tasks.
// The initial state contains an empty array for task items and a total task count of zero.
// The slice is created using createSlice from Redux Toolkit, which simplifies the process of creating actions and reducers.