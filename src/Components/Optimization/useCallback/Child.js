import React, { useEffect } from "react";
const Child = (props) => {
  useEffect(() => {
    console.log("Props changed");
  }, [props.calculate]);
  return <div>Child Component</div>;
};
export default Child;
