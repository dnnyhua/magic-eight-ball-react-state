import "./App.css"
import { answers } from "./answers";
import { Eightball } from "./Eightball";




function App() {
  return (
    <div className="App">
      <Eightball
        answers={answers} />
    </div>
  );
}

export default App;