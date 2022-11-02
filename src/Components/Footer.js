import { Container, Row, Col } from "react-bootstrap";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const Footer = () => {
  return (
    <div className={"bg-light footer"}>
      <div className="footer-top">
        <div className="footer-bg">
          <Container>
            <div className="container-fluid">
              <Row className="p-0 jusify-content-center">
                <Col lg="4" className="contact-us py-5">
                  <p className="title">contact us</p>
                  <p className="mail">
                    <a href="mailto:#">me@someone.com</a>
                  </p>
                  <p className="mail">
                    <a href="#">+20 116548742</a>
                  </p>
                </Col>
                <Col lg="4" className="contact-us py-5">
                  <p className="title">our servings</p>
                  <p className="mail">
                    <a href="#">Pizza</a>
                  </p>
                  <p className="mail">
                    <a href="#">Broasted Chicken</a>
                  </p>
                  <p className="mail">
                    <a href="#">Shawrma</a>
                  </p>
                  <p className="mail">
                    <a href="#">Chicken Stripes</a>
                  </p>
                </Col>
                <Col lg="4" className="map py-5 align-items-start">
                  <p className="title">Our Location</p>
                  <div>
                    <iframe
                      title="location"
                      className="rounded"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Giza%20Giza+(Giza)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="flexDiv">
            <span>
              copyright &#169; all rights reserved to{" "}
              <a
                className="ahmed-amir"
                href="https://www.linkedin.com/in/ahmed-amir-589909197/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Ahmed amir
              </a>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
