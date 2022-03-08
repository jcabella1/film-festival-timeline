import './App.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Bibliography from "./components/bibliography/Bibliography";
import CoverImage from "./CoverImage"

const coverimg = "https://media-exp1.licdn.com/dms/image/C561BAQEl6CGydkeJVw/company-background_10000/0/1549565012602?e=2159024400&v=beta&t=3KzcH-H8HTpyT4i21yNJ84l_QUgUsJmrG0RedRqtptg"

function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <CoverImage imgsrc={coverimg} height="100%" opacity="0.5"> 
          <h1 className="title">CAAMFEST</h1>
          <About />
        </CoverImage>
        <Timeline />
        <Bibliography />
      </ParallaxProvider>
    </div>
  );
}

export default App;
