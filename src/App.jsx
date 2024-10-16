import { InputFocus } from "./components/Ref";
import { Counter } from "./components/State";
import { Timer } from "./components/Effect";

function App() {
  return (
    <div className="app">
      <Counter />
      <InputFocus />
      <Timer />
    </div>
  );
}

export default App;
