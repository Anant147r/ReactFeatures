import React, { useState, useEffect } from "react";
import { MemoizedParent2 } from "../Parent2/Parent2";
const Parent1 = () => {
  const [name, setName] = useState("Anant");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Parent1");
  });
  return (
    <div>
      <div>
        <MemoizedParent2 name={name} />
      </div>
      <div>Counter = {counter}</div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Change Counter
      </button>
      <button
        onClick={() => {
          setName("Rawat");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Parent1;
