import { configureStore } from '@reduxjs/toolkit';
import filtersSLice from "../components/Filters/FiltersSlice";
import todosSlice from "../components/TodoList/TodosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSLice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
