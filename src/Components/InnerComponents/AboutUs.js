import { Container } from "react-bootstrap";
import pizzaFly from "../../assets/img/pizzafly.webp";
const AboutUs = () => {
  return (
    <div className="about-us">
      <Container className="flexed">
        <span className="about-us-header pb-2">who we are ?</span>
        <span className="red-line"></span>
        <div className="about-us-content flexed row">
          <div className="about-us-details col-lg-7 col-12 order-lg-1 order-2">
            <span>
              we are a restaurant with a new way of serving and providing pizza.
              we started since 2018 with love and joy to become one of the most
              popular restaurants in the entire country. we are here to make
              eating and baking pizza more fun.
              <strong> we love pizzaaaa</strong>.
            </span>
          </div>
          <div className="about-us-img-container col-lg-5 col-12 order-lg-2 order-1">
            <img className="img-fluid" alt="homemade pizza" src={pizzaFly} />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AboutUs;
