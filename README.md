# React X TypeScript App

> _연습용 프로젝트 앱_

---

## TodoList_Recoil

- 리코일 연습용 투두리스트

### 리코일 설치

```vash
npm i recoil
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

```ts
import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState", // 유일 id값을 넣어준다.
  default: [], // 기본값
});
```

---
