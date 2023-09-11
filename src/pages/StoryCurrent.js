
import '../App.css';
import { NavBarRead } from "../components/NavBarRead"
import StoryCardBali from "../pages/Stories/StoryCardBali";
import 'animate.css';

const StoryCurrent = () => {

  return (
    <>
    <section className="navbar__story-current">
    <NavBarRead />
    </section>
    <section className="story-current">
      <span className='space'>
      <h2>Summer in Bali</h2>
        </span>
        <p>Explore the enchanting island of Bali through the lens of an unforgettable summer</p>
        </section>
        <div className="space">&nbsp;</div>
        <div className="space">&nbsp;</div>
    <StoryCardBali />
    </>
  );
};

export default StoryCurrent;