import "./App.css";
// import { Navbar } from "./components/Navbar/Navbar.js";
import { Home } from "./components/Home/Home.js";
import { About } from "./components/About/About.js";
import { Experience } from "./components/Experience/Experience.js";
import { Projects } from "./components/Projects/Projects.js";
import { Contact } from "./components/Contact/Contact.js";
// import { WorkingSideMenu } from "./components/Navbar/WorkingSideMenu";
// import { TopNav } from "./components/Navbar/TopNav";
import { CombinedMenu } from "./components/Navbar/CombinedMenu";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CombinedMenu />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* <WorkingSideMenu /> */}
      {/* <TopNav /> */}
    </div>
  );
}

export default App;
