import { Container } from "react-bootstrap";
const services = ({ classes, img, title, description }) => {
  return (
    <div className="PizzaType container-fluid">
      <div className="row baking">
        <div className={classes.imageClasses}>
          <img src={img} alt="baking pizza" className="img-fluid" />
        </div>
        <div className={classes.descriptionClasses}>
          <Container className="py-5">
            <span className="baking-description-header">{title}</span>
            {description}
          </Container>
        </div>
      </div>
    </div>
  );
};
export default services;
