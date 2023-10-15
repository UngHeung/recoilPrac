import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoIndexState, todoListState } from "../../atom/todoListAtom";

export interface todoListProps {
  id: number;
  text: string;
  isComplete: boolean;
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState(""); // react state
  const [todoIndex, setTodoIndex] = useRecoilState(todoIndexState);
  const setTodoList = useSetRecoilState<todoListProps[]>(todoListState); // recoil state setter

  const addItem = () => {
    setTodoList((oldTodoList): todoListProps[] => [
      ...oldTodoList,
      {
        id: todoIndex,
        text: inputValue,
        isComplete: false,
      } as todoListProps,
    ]);

    setTodoIndex(todoIndex + 1);
    setInputValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </form>
  );
};

export default TodoItemCreator;
