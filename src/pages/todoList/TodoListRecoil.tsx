import React from "react";
import TodoItemCreator, { todoListProps } from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { todoListState } from "../../atom/todoListAtom";
import { useRecoilValue } from "recoil";

const TodoListRecoil = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem: todoListProps, idx: number) => (
        <TodoItem key={`todoItem_${idx}`} item={todoItem} />
      ))}
    </>
  );
};

export default TodoListRecoil;
