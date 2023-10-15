import React from "react";
import "./App.css";
import TodoListRecoil from "./pages/TodoListRecoil";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <TodoListRecoil />
    </RecoilRoot>
  );
};

export default App;
