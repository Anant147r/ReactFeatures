// import logo from './logo.svg';
import "./App.css";
// import Parent1 from "./Components/ReactMemo/Parent1/Parent1";
import UseMemo from "./Components/Optimization/useMemo/UseMemo";
import UseCallback from "./Components/Optimization/useCallback/useCallback";
import UsingFetch from "./Components/UsingFetch/UsingFetch";
function App() {
  return (
    <div className="App">
      {/* <Parent1 /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <UsingFetch />
    </div>
  );
}

export default App;
