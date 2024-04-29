import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-base-200">
      {/* <div className="bg-base-200 sm:mx-20 sm:my-10 sm:rounded-2xl"> */}
      <NavBar />
      <Hero />
      {/* <LogoClouds /> */}
      <Services />
      <Workflow />
      <Testimonial />
      <Team />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
