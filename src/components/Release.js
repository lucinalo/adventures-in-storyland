
import { Container, Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import book1 from "../assets/img/book1.png";
import book2 from "../assets/img/book2.png";
import book3 from "../assets/img/book3.png";
import colorSharp from "../assets/img/color-sharp.png";
import { Link } from 'react-router-dom';

export const Release = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="release" id="releases">
            <Container>
                <Row>
                    <Col>
                        <div className="release-bx">
                            <h2>
                                Latest releases
                            </h2>
                            <p>Discover our latest stories.</p>
                            <Carousel responsive={responsive} infinite={true} className="release-slider">

                                <div className="item">
                                    <Link to='./StoryCurrent'>
                                        <img src={book1} alt="Image" />
                                        <h5>Beachside</h5>
                                    </Link>

                                </div>
                                <div className="item">
                                    <Link to='./StoryCurrent'>
                                        <img src={book2} alt="Image" />
                                        <h5>Journey in Thailand</h5>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to='./StoryCurrent'>
                                        <img src={book3} alt="Image" />
                                        <h5>Jungles of Bali</h5>
                                    </Link>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}