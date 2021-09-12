import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Presentation from "./components/Presentation";
import aboutImage from "./img/Frame 19.png";
import aboutImage1 from "./img/download.png"
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutImage}
      title="Comes With All You Need For Daily Life"
      button="Get The App" />
      <Presentation />
      <About image={aboutImage1}
      title="Lightning speed customer support"
      button="Downlaod Now" />
      <Contact />
    </div>
  );
}

export default App;
