import React from "react";
import { useLocation } from "react-router-dom";
const Location = () => {
  const location = useLocation();
  return (
    <div>
      <button
        onClick={() => {
          alert(location.pathname);
        }}
      >
        Show current URL
      </button>
    </div>
  );
};
export default Location;
