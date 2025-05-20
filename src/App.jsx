import Header from "./components/Header";
import Introduce from "./components/Introduce";
import AboutMe from "./components/AboutMe";
import Technique from "./components/Technique";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Introduce />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Technique />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
