import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn HTML", completed: false, priority: "Medium" },
    { id: 2, name: "Learn CSS", completed: true, priority: "High" },
    { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
  ],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
