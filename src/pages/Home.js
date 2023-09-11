import { NavBarHome } from "../components/NavBarHome";
import { Banner } from "../components/Banner";
import { Release } from "../components/Release";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";



const Home = () => {

  return (
    <>
    <NavBarHome/>
    <Banner/>
    <Release/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default Home;