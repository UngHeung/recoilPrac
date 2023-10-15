import React from "react";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { todoListState } from "../../atom/todoListAtom";
import { useRecoilValue } from "recoil";

const TodoListRecoil = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => {
        // <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </>
  );
};

export default TodoListRecoil;
