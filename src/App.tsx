import React from "react";
import TodoListRecoil from "./pages/todoList/TodoListRecoil";
import { RecoilRoot } from "recoil";
import "./App.css";

const App = () => {
  return (
    <RecoilRoot>
      <TodoListRecoil />
    </RecoilRoot>
  );
};

export default App;
