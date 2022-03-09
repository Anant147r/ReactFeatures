// import logo from './logo.svg';
import "./App.css";
// import Parent1 from "./Components/ReactMemo/Parent1/Parent1";
import UseMemo from "./Components/Optimization/useMemo/UseMemo";
import UseCallback from "./Components/Optimization/useCallback/useCallback";
function App() {
  return (
    <div className="App">
      {/* <Parent1 /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
}

export default App;
