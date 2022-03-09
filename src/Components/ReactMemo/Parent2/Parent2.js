import React, { useEffect, memo } from "react";
const Parent2 = (props) => {
  useEffect(() => {
    console.log("Parent2");
  });
  return <div>Name is - {props.name}</div>;
};
export const MemoizedParent2 = memo(Parent2);
