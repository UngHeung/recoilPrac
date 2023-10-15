import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListFilterState } from "../../atom/todoListAtom";

const TodoListFilters = () => {
  const setFilter = useSetRecoilState(todoListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <label htmlFor="filter">Filter : </label>
      <select id="filter" onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
