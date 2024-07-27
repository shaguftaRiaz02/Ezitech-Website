import TopBar from "./Components/TopBar/TopBar";
import NavbarHero from "./Components/NavbarHero/NavHero";
import Services from "./Components/Services/Services";
import Bundles from "./Components/Bundles/Bundles";
import Internship from "./Components/Internships/Internship";
import Download from "./Components/Download/Download";
import EndNote from './Components/EndNote/EndNote'
import Footer from "./Components/Footer/Footer"
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <TopBar />
      <NavbarHero />
      <Services />
      <Bundles />
      <Internship />
      <Download/>
      <EndNote/>
      <Footer/>
      <ContactUs/>
    </>
  );
};

export default App;
