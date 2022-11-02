import { Container } from "react-bootstrap";
import varietypizza from "../../assets/img/varietypizza.webp";
const PizzaType = () => {
  return (
    <div className="PizzaType container-fluid">
      <div className="row baking">
        <div className=" col-12 col-lg-6 order-1 px-0  baking-img-holder">
          <img src={varietypizza} alt="baking pizza" className="img-fluid" />
        </div>
        <div className="baking-description-holder align-item-center col-12 col-lg-6 order-2">
          <Container className="py-5">
            <span className="baking-description-header">
              Choose your favorite from a various collection
            </span>
            Veniam eiusmod pariatur cillum tempor. Veniam cillum proident dolore
            cupidatat commodo pariatur excepteur excepteur incididunt veniam
            aute elit magna sint. Sunt fugiat adipisicing exercitation non
            consectetur incididunt.Ad eu id ea exercitation commodo. Dolore
            fugiat commodo magna ad nostrud consectetur et excepteur do velit in
            nostrud non. Voluptate sunt minim tempor est est culpa nostrud dolor
            enim pariatur est ex. Deserunt officia sit non commodo sunt anim
            proident ipsum et nulla id et excepteur proident. Nulla est
            exercitation dolore qui ullamco. Laborum officia id ipsum do esse
            Lorem magna sint est aliquip occaecat adipisicing pariatur nostrud.
            Nisi dolor deserunt sit laborum laborum eiusmod eiusmod exercitation
            amet.
          </Container>
        </div>
      </div>
    </div>
  );
};
export default PizzaType;
