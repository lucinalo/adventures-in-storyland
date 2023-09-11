import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Col, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bali1 from "../../assets/img/Bali-1.png";
import bali2 from "../../assets/img/Bali-2.png";
import bali3 from "../../assets/img/Bali-3.png";
import bali4 from "../../assets/img/Bali-4.png";
import bali5 from "../../assets/img/Bali-5.png";
import bali6 from "../../assets/img/Bali-6.png";
import bali7 from "../../assets/img/Bali-7.png";
import bali8 from "../../assets/img/Bali-8.png";
import bali9 from "../../assets/img/Bali-9.png";
import colorSharp from "../../assets/img/color-sharp.png";
import '../../App.css';

export const StoryCardBali = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <section className="page" id="pages">
            
                <Container>
                    <Row>
                        <Col>
                            <div className="page-bx">

                                <Carousel responsive={responsive} infinite={true} className="page-slider">
                                    <div className="item">
                                        <img src={bali1} alt="Image" />
                                        <h5>Page 1</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali2} alt="Image" />
                                        <h5>Page 2</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali3} alt="Image" />
                                        <h5>Page 3</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali4} alt="Image" />
                                        <h5>Page 4</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali5} alt="Image" />
                                        <h5>Page 5</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali6} alt="Image" />
                                        <h5>Page 6</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali7} alt="Image" />
                                        <h5>Page 7</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali8} alt="Image" />
                                        <h5>Page 8</h5>
                                    </div>
                                    <div className="item">
                                        <img src={bali9} alt="Image" />
                                        <h5>Page 9</h5>
                                    </div>
                                </Carousel>
                                <div className="explore-more" id="">
                                    <Container>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                    <Link to='/Read'>
                                                        <button onClick={() => console.log('connect')}>Explore more stories<ArrowRightCircle size={25} /></button>
                                                    </Link>
                                                </div>}
                                        </TrackVisibility>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default StoryCardBali;