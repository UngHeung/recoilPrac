import { atom, selector } from "recoil";

// 상태 atom
export const textState = atom({
  key: "textState",
  default: "",
});

// 상태 selector
export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
