import '../App.css';
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { NavBarAbout } from "../components/NavBarAbout"
import threedcat from "../assets/img/two-3d-cats.png";

const About = () => {

  return (
    <>
    <NavBarAbout />
    <section className="story full-page-background" id="story">
      <span className='space'>
    <h2>About Adventures in Storyland</h2>
    </span>
    <p>All the stories on this site are written and illustrated by two sisters, Lucina and Lettie.
<br></br><br></br>
Lucina and Lettie reside in the heart of Downtown Toronto, in a cute and cozy neighborhood. They share their home with two funny cats. The sisters have a penchant for peanut butter and jelly sandwiches and weirdly shaped mirrors, but strongly dislike clowns and overly crowded coffee shops.</p>
<img className="about-img" src={threedcat} />
    </section>
    <Contact />
    <Footer />
    </>
  );
};

export default About;