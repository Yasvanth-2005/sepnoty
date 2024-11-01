import Hero from "./components/Landing/Hero";
import About from "./components/Landing/About";
// import Brands from "./components/Landing/Brands";
import Services from "./components/Landing/Services";
import MemberShip from "./components/Landing/Membership";
import Testimonals from "./components/Landing/Testimonals";
import Stats from "./components/Landing/Stats";
import MobileApps from "./components/Landing/MobileApps";
import Footer from "./components/Footer";
import Contact from "./components/Landing/Contact";

function App() {
  return (
    <main className="w-full bg-sectionBg">
      <Hero />
      {/* <Brands /> */}
      <About />
      <Services />
      <MemberShip />
      <Testimonals />
      <Stats />
      <MobileApps />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
