import { Carousel, Container } from "react-bootstrap";
import slide1 from "../../assets/img/Pizza1.webp";
import slide2 from "../../assets/img/Pizza2.webp";
import slide3 from "../../assets/img/Pizza3.webp";
import slide4 from "../../assets/img/MakingPizza.webp";
const CarouselMod = () => {
  return (
    <Carousel className="fullHeight">
      {/*<--------------------Slide1----------------------->*/}
      <Carousel.Item className="fullHeight slide-container d-flex justify-content-center">
        <div className="bg-img">
          <img
            src={slide1}
            className="h-100 w-100 img-fluid fullHeight"
            alt="slide1"
          />
        </div>
        <div className="w-100 fullHeight bg-fade-main-carousel"></div>
        <Container className="w-100 content-container fullHeight d-flex align-items-center justify-content-center flex-column">
          <span className="header-span text-center">
            hello to the pizza company
          </span>
          <span className="caption-span text-center">
            there is no such thing as full
          </span>
        </Container>
      </Carousel.Item>
      {/*<--------------------Slide1----------------------->*/}

      {/*<--------------------Slide2----------------------->*/}
      <Carousel.Item className="fullHeight slide-container d-flex justify-content-center">
        <div className="bg-img">
          <img
            src={slide2}
            className="h-100 w-100 img-fluid fullHeight"
            alt="slide2"
          />
        </div>
        <div className="w-100 fullHeight bg-fade-main-carousel"></div>
        <Container className="w-100 content-container fullHeight d-flex align-items-center justify-content-center flex-column">
          <span className="header-span text-center">
            elegance is our way of emersion
          </span>
          <span className="caption-span text-center">
            enjoy an elegant place suitable for all the occasions
          </span>
        </Container>
      </Carousel.Item>
      {/*<--------------------Slide2----------------------->*/}

      {/*<--------------------Slide3----------------------->*/}

      <Carousel.Item className="fullHeight slide-container d-flex justify-content-center">
        <div className="bg-img">
          <img
            src={slide3}
            className="h-100 w-100 img-fluid fullHeight"
            alt="slide3"
          />
        </div>
        <div className="w-100 fullHeight bg-fade-main-carousel"></div>
        <Container className="w-100 content-container fullHeight d-flex align-items-center justify-content-center flex-column">
          <span className="header-span text-center">sharing is caring</span>
          <span className="caption-span text-center">
            come with your friends to create amazing moments
          </span>
        </Container>
      </Carousel.Item>
      {/*<--------------------Slide3----------------------->*/}

      {/*<--------------------Slide4----------------------->*/}

      <Carousel.Item className="fullHeight slide-container d-flex justify-content-center">
        <div className="bg-img">
          <img
            src={slide4}
            className="h-100 w-100 img-fluid fullHeight"
            alt="slide1"
          />
        </div>
        <div className="w-100 fullHeight bg-fade-main-carousel"></div>
        <Container className="w-100 content-container fullHeight d-flex align-items-center justify-content-center flex-column">
          <span className="header-span text-center">
            boring is 404 not found
          </span>
          <span className="caption-span text-center">
            you can create your own pizza
          </span>
        </Container>
      </Carousel.Item>
      {/*<--------------------Slide4----------------------->*/}
    </Carousel>
  );
};

export default CarouselMod;
