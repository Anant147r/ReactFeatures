import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3 } from "./Pages/PageExport";
const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
