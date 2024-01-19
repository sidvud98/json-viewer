import "./styles.css";
import JSONViewer from "./JsonViewer/JSONViewer";
import inputJSON from './input.json'

// A JSON value can be an object, array, number, string, true, false, or null.
export default function App() {
  return (
    <div className="App">
      <JSONViewer inpJson={inputJSON} />
    </div>
  );
}
