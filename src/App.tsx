import "./App.css";
import { ThreeWrapper } from "./three/wrapper";

function App() {
  return (
    <>
      <main>
        <h1>You want that</h1>
      </main>
      <div className="canvas-wrapper">
        <ThreeWrapper />
      </div>
    </>
  );
}

export default App;
