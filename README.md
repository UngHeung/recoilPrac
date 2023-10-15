# React X TypeScript App

> _연습용 프로젝트 앱_

---

## TodoList_Recoil

- 리코일 연습용 투두리스트

### 리코일 설치

```powershell
npm i recoil
npm i recoil-persist # 상태 저장 확인용
```

### `RecoilRoot`로 감싸주기

```tsx
const App = () => {
  return (
    <RecoilRoot>
      <div></div>
    </RecoilRoot>
  );
};
```

### Atom 만들기

관리할 상태를 추가 (source of truth)
상태가 제대로 저장되는지 확인하기 위해서 persist를 사용

```ts
import { atom } from "recoil";

export const todoIndexState = atom({
  key: "todoIndex",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

// recoil state # todoList
export const todoListState = atom({
  key: "todoListState",
  default: [] as todoListProps[],
  effects_UNSTABLE: [persistAtom],
});
```

### 상태에 추가하기(아이템 생성 및 상태 적용)

`todoListState`의 내용을 업데이트 할 수 있는 setter 함수에 접근하기 위해 `useSetRecoilState()`를 사용

```tsx
// react state
const [inputValue, setInputValue] = useState("");
// recoil state #index
const [todoIndex, setTodoIndex] = useRecoilState(todoIndexState);
// recoil state setter #todoList
const setTodoList = useSetRecoilState<todoListProps[]>(todoListState);

const addItem = () => {
  setTodoList((oldTodoList): todoListProps[] => [
    // 기존 아이템 목록
    ...oldTodoList,
    // 새로운 아이템
    {
      id: todoIndex,
      text: inputValue,
      isComplete: false,
    } as todoListProps,
  ]);

  // 아이템 인덱스 ++
  setTodoIndex(todoIndex + 1);
  // 입력 값 초기화
  setInputValue("");
};
```

### 상태 변경하기(아이템 수정, 삭제 및 상태 적용)

아이템을 변경하고 변경된 아이템 업데이트 및 삭제를 위해 `useRecoilState()`를 사용

```tsx
// recoil state # todoList > item
const item = props.item as todoListProps;
// recoil state # todoList
const [todoList, setTodoList] = useRecoilState(todoListState);

// edit text
const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newList = todoList.map((todo: todoListProps) =>
    // 아이디와 비교 후 같은 아이디를 가진 아이템의 text를 변경
    todo.id === item.id ? { ...todo, text: e.target.value } : todo
  );

  setTodoList(newList);
};

// edit isComplete
const toggleItemCompletion = () => {
  const newList = todoList.map(
    (todo: todoListProps) => (todo.id === item.id ? { ...todo, isComplete: !item.isComplete } : todo)
    // 상태가 제대로 업데이트 되도록 하기 위해 useState를 사용하지 않고 item의 상태를 사용한다.
  );
  setTodoList(newList);
};

// delete item
const deleteItem = () => {
  const newList = todoList.filter((todo: todoListProps) => todo.id !== item.id);
  setTodoList(newList);
};
```

### 셀렉터(아이템 필터링, 통계)

아이템 필터링 기능을 위해 `selector`를 사용
selector는 state(# todoList)의 파생된 상태(필터링 된 목록 또는 필터링 된 항목 수를 새롭게 생성 및 파생)

```ts
// recoil state # todoList filter
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// recoil selector # todoList, todoList filter
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    // todoList filter
    const filter = get(todoListFilterState);
    // todoList
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item: todoListProps) => item.isComplete);
      case "Show Uncomplete":
        return list.filter((item: todoListProps) => !item.isComplete);
    }
  },
});

// recoil selector # todoListState
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
```

---
