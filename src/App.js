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
function App() {
  return (
    <div className="App">
      {/* <Parent1 /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UsingFetch /> */}
      {/* <Article /> */}
      {/* <Counter /> */}
      {/* <WithoutObject /> */}
      <WithObject />
    </div>
  );
}

export default App;
