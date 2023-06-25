import { createSelector } from "@reduxjs/toolkit";

const searchTextSelector = (state) => state.filters.search;
const statusSelector = (state) => state.filters.status;
const prioritiesSelector = (state) => state.filters.priorities;
const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  searchTextSelector,
  statusSelector,
  prioritiesSelector,
  todoListSelector,
  (searchText, status, priorities, todoList) => {
    return todoList.filter((todo) => {
      const matchSearchText = (todo.name.toLowerCase()).includes(searchText.toLowerCase());
      const matchPriority = priorities.length === 0 || priorities.includes(todo.priority);
      const matchStatus = status === "All" || (status === "Completed" ? todo.completed : !todo.completed);

      return matchSearchText && matchPriority && matchStatus;
    });
  }
);

