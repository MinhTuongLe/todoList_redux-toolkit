import { createSlice } from "@reduxjs/toolkit";

const getInitialStateFromLocalStorage = () => {
  const initialState = localStorage.getItem("todoList");
  return initialState ? JSON.parse(initialState) : [];
};

export default createSlice({
  name: "todoList",
  initialState: getInitialStateFromLocalStorage(),
  reducers: {
    addToDo: (state, action) => {
      state.unshift(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    toggleStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
        localStorage.setItem("todoList", JSON.stringify(state));
      }
    },
    removeToDo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(state));
      }
    },
  },
});
