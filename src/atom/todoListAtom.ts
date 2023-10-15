import { atom, selector } from "recoil";
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

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list?.filter((item: todoListProps) => item?.isComplete);
      case "Show Uncompleted":
        return list?.filter((item: todoListProps) => !item?.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = (todoList?.filter((item: todoListProps) => item?.isComplete)).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
