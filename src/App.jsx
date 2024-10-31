import Hero from "./components/Landing/Hero";
import About from "./components/Landing/About";
import Brands from "./components/Landing/Brands";
import Services from "./components/Landing/Services";
import MemberShip from "./components/Landing/Membership";
import Testimonals from "./components/Landing/Testimonals";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="w-full bg-sectionBg">
      <Hero />
      {/* <Brands /> */}
      <About />
      <Services />
      <MemberShip />
      <Testimonals />
      <Footer />
    </main>
  );
}

export default App;
