import { Carousel, Container } from "react-bootstrap";
const Slider = () => {
  return (
    <Carousel className="fullHeight">
      {/*<--------------------Slide1----------------------->*/}
      <Carousel.Item className="fullHeight">
        <div className="fullHeight slide1">
          <div className=" bg-fade fullHeight">
            <Container className="flexed fullHeight">
              <span className="header-span text-center">
                hello to the pizza company
              </span>
              <span className="caption-span text-center">
                there is no such thing as full
              </span>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      {/*<--------------------Slide1----------------------->*/}

      {/*<--------------------Slide2----------------------->*/}
      <Carousel.Item className="fullHeight">
        <div className="fullHeight slide2">
          <div className=" bg-fade fullHeight">
            <Container className="flexed fullHeight">
              <span className="header-span text-center">
                elegance is our way of emersion
              </span>
              <span className="caption-span text-center">
                enjoy an elegant place suitable for all the occasions
              </span>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      {/*<--------------------Slide2----------------------->*/}

      {/*<--------------------Slide3----------------------->*/}

      <Carousel.Item className="fullHeight">
        <div className="fullHeight slide3">
          <div className=" bg-fade fullHeight">
            <Container className="flexed fullHeight">
              <span className="header-span text-center">
                sharing is carring
              </span>
              <span className="caption-span text-center">
                come with your friends to create amazing moments
              </span>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      {/*<--------------------Slide3----------------------->*/}

      {/*<--------------------Slide4----------------------->*/}

      <Carousel.Item className="fullHeight">
        <div className="fullHeight slide4">
          <div className=" bg-fade fullHeight">
            <Container className="flexed fullHeight">
              <span className="header-span text-center">
                Boring is 404 not found
              </span>
              <span className="caption-span text-center">
                you can create your own pizza
              </span>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      {/*<--------------------Slide4----------------------->*/}
    </Carousel>
  );
};

export default Slider;
