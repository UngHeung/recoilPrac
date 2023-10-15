import { atom } from "recoil";
import { todoListProps } from "../pages/todoList/TodoItemCreator";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todoIndexState = atom({
  key: "todoIndex",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const todoListState = atom({
  key: "todoListState",
  default: [] as todoListProps[],
  effects_UNSTABLE: [persistAtom],
});
