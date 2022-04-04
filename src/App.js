// import logo from './logo.svg';
import React from "react";
import "./App.css";
// import Parent1 from "./Components/ReactMemo/Parent1/Parent1";
import UseMemo from "./Components/Optimization/useMemo/UseMemo";
import UseCallback from "./Components/Optimization/useCallback/useCallback";
import UsingFetch from "./Components/UsingFetch/UsingFetch";
import Article from "./Components/Testing/ComponentFormTesting/SimulateAndDiveTest/Article";
import Counter from "./Components/Testing/ComponentTestingSeries/Counter";
import WithoutObject from "./Components/PropsTypes/Example1/WithoutObject";
import WithObject from "./Components/PropsTypes/Example1/WithObject";
import {
  Page1,
  Page3,
  Page2,
  UseHistory,
  UseParams,
  Location,
} from "./Components/NewReactRouter/Pages/PageExport";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Parent1 /> */}
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        {/* <UsingFetch /> */}
        {/* <Article /> */}
        {/* <Counter /> */}
        {/* <WithoutObject /> */}
        {/* <WithObject /> */}
      </div>
      <Routes>
        <Route path="page" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="history" element={<UseHistory />} />
        <Route
          path="params/:fName/:lName"
          defaultParams={{ fName: "Anant" }}
          element={<UseParams />}
        />
        <Route path="location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
