export const addToDo = (data) => {
  return {
    type: "todoList/addToDo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};

export const toggleStatus = (id) => {
  return {
    type: "todoList/toggleStatus",
    payload: id,
  };
};
