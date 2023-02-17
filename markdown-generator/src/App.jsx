import "./App.css";
import Markdown from "./components/Markdown";
import Html from "./components/Html";
import Header from "./components/Header";
import { markdown } from "markdown";
console.log(markdown.toHTML("Hello *World*!"));

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row row-cols-2 g-3 w-100 h-100">
        <div className="col">
          <Markdown />
        </div>
        <div className="col">
          <Html />
        </div>
      </div>
    </div>
  );
}

export default App;
