import './App.scss';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Bibliography from "./components/bibliography/Bibliography";

function App() {
  return (
    <div className="app">
        <div className="sections">
          <About />
          <Timeline />
          <Bibliography />
        </div>
    </div>
  );
}

export default App;
