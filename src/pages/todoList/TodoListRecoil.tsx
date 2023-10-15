import React from "react";
import TodoItemCreator, { todoListProps } from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { filteredTodoListState, todoListState } from "../../atom/todoListAtom";
import { useRecoilValue } from "recoil";
import TodoListFilters from "./TodoListFilters";
import TodoListStates from "./TodoListStates";

const TodoListRecoil = () => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStates />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList?.map((todoItem: todoListProps, idx: number) => (
        <TodoItem key={`todoItem_${idx}`} item={todoItem} />
      ))}
    </>
  );
};

export default TodoListRecoil;
