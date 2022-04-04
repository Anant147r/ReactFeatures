import React from "react";
import { useParams } from "react-router-dom";
const UseParams = () => {
  const { fName, lName } = useParams();
  return (
    <div>
      First Name is {fName}
      Last Name is {lName}
    </div>
  );
};
export default UseParams;
