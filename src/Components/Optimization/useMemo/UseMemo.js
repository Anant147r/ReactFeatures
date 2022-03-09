import React, { useState, useMemo } from "react";
const UseMemo = () => {
  const [code, setCode] = useState(0);
  var value = 1;
  const calculator = () => {
    var dummy = 1;
    for (let i = 0; i < 100; i++) dummy += i;
    console.log("Hello");
    return dummy;
  };
  //   value = calculator();
  value = useMemo(calculator, []);

  return (
    <div>
      <div>Code is - {code}</div>
      <button
        onClick={() => {
          setCode((prev) => prev + 1);
        }}
      >
        Increment Code
      </button>
    </div>
  );
};

export default UseMemo;
