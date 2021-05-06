import ApiCall from "./components/ApiCall";
import "./App.css";
import Sorting from "./components/Sorting";
import EvenNumbers from "./components/EvenNumbers";
import ConsecutiveNumbers from "./components/ConsecutiveNumbers";
import MaxRepeatedValue from "./components/MaxRepeatedValue";

function App() {
  return (
    <div className="App">
      <EvenNumbers />
      <ApiCall />
      <Sorting />
      <ConsecutiveNumbers />
      <MaxRepeatedValue />
    </div>
  );
}

export default App;
