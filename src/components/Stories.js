import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'animate.css/animate.min.css';
import { Container, Row, Col, Tab } from "react-bootstrap";
import { StoryCard } from "./StoryCard";
import storImg1 from "../assets/img/story-img1.png";
import storImg2 from "../assets/img/story-img2.png";
import storImg3 from "../assets/img/story-img3.png";
import storImg4 from "../assets/img/story-img4.png";
import storImg5 from "../assets/img/story-img5.png";

import TrackVisibility from 'react-on-screen';

export const Stories = () => {
  const stories = [
    {
      title: "Summer in Bali",
      description: "Explore the enchanting island of Bali through the lens of an unforgettable summer",
      imgUrl: storImg1,
      link: "../StoryCurrent",
    },
    {
      title: "The Three Pawsome Pals",
      description: "Three furry friends embark on an unforgettable adventure",
      imgUrl: storImg2,
      link: "../StoryCurrent",
    },
    {
      title: "A Tale of Alvin the Goose",
      description: "Prepare to soar high above the world in this captivating story",
      imgUrl: storImg3,
      link: "../StoryCurrent",
    },
    {
      title: "A Girl's Magical Adventure",
      description: "Step into a world of enchantment and wonder",
      imgUrl: storImg4,
      link: "../StoryCurrent",
    },
    {
      title: "Emily's Journey",
      description: "A short tale of courage and discovery",
      imgUrl: storImg5,
      link: "../StoryCurrent",
    },
  ];

  return (
    <section className="story full-page-background" id="story">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="space">
                    <h2>Stories</h2>
                  </span>
                  <p>Dive into a world of wonder and imagination with our delightful collection of children's stories.</p>
                  <Tab.Container id="stories-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {stories.map((story, index) => (
                            <StoryCard key={index} {...story} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
