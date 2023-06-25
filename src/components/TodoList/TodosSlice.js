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
      state.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    toggleStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
        localStorage.setItem("todoList", JSON.stringify(state));
      }
    },
  },
});
