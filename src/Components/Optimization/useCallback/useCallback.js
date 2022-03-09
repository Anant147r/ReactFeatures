import React, { useState, useCallback } from "react";
import Child from "./Child";
const UseCallback = () => {
  const [value, setValue] = useState(0);
  const [num] = useState(0);
  //   const calculate = (num) => {
  //     return num * 2;
  //   };

  const calculate = useCallback(() => {
    return num * 2;
  }, [num]);

  return (
    <div>
      <div>Value = {value}</div>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        Change Value
      </button>
      <Child calculate={calculate} />
    </div>
  );
};

export default UseCallback;
