import React, { useEffect, useRef } from "react";

const UseRefPrac = () => {
  const firstInput = useRef("");
  const secondInput = useRef("");
  const thirdInput = useRef("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: React.MutableRefObject<string>) => {
    type.current = e.target.value;
  };

  useEffect(() => {
    console.log(1);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(firstInput, secondInput, thirdInput);
  };

  const reset = () => {
    firstInput.current = "";
    secondInput.current = "";
    thirdInput.current = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_input">first input</label>
      <input type="text" name="firstInput" id="first_input" onChange={(e) => handleChange(e, firstInput)} />
      <br />
      <label htmlFor="second_input">second input</label>
      <input type="text" name="secondInput" id="second_input" onChange={(e) => handleChange(e, secondInput)} />
      <br />
      <label htmlFor="third_input">third input</label>
      <input type="text" name="thirdInput" id="third_input" onChange={(e) => handleChange(e, thirdInput)} />
      <br />
      <button>console</button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </form>
  );
};

export default UseRefPrac;
