import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li key={"todoList"}>
        <Link to={"/recoil"}>recoil # To-do List</Link>
      </li>
      <li>
        <Link to={"/useref"}>useMemo #</Link>
      </li>
    </ul>
  );
};

export default Home;
