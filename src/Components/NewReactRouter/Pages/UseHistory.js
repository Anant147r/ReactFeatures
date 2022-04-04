import React from "react";
import { useNavigate } from "react-router-dom";
const UseHistory = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/page");
        }}
      >
        Go to page 1
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go to prev Page
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
      >
        Go to Next Page
      </button>
    </div>
  );
};

export default UseHistory;
