import React from "react";
import { todoListState } from "../../atom/todoListAtom";
import { useRecoilState } from "recoil";
import { todoListProps } from "./TodoItemCreator";

const TodoItem = ({ ...props }) => {
  const item = props.item as todoListProps;
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = todoList.map((todo: todoListProps) =>
      todo.id === item.id ? { ...todo, text: e.target.value } : todo
    );

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = todoList.map((todo: todoListProps) =>
      todo.id === item.id ? { ...todo, isComplete: !item.isComplete } : todo
    );
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((todo: todoListProps) => todo.id !== item.id);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
