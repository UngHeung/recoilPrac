import React from "react";
import Home from "./pages/Home";
import TodoListRecoil from "./pages/todoList/TodoListRecoil";
import UseRefPrac from "./pages/reactHook/UseRefPrac";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recoil" element={<TodoListRecoil />} />
          <Route path="/useref" element={<UseRefPrac />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
