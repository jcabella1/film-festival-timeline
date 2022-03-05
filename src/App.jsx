import './App.scss';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Bibliography from "./components/bibliography/Bibliography";

function App() {
  return (
    <div className="app">
      <h1 className="title">CAAMFEST</h1>
      <About />
      <Timeline />
      <Bibliography />
    </div>
  );
}

export default App;
