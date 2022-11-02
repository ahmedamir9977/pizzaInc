import { Container } from "react-bootstrap";
const Person = ({
  customerkey,
  customerName,
  customerImg,
  customerCaption,
  customerRate,
}) => {
  return (
    <div className="py-5 my-5 w-50 person-card">
      <Container className="d-flex justify-content-center flex-column">
        <div className="customer-image d-flex justify-content-center">
          <img
            className="img-fluid w-25 rounded-circle personal-image"
            src={customerImg}
            alt={customerkey}
          />
        </div>
        <div className="customer-name text-center d-flex justify-content-center">
          <span>{customerName}</span>
        </div>
        <div className="customer-rate d-flex justify-content-center">
          <span>{customerRate}</span>
        </div>
        <div className="customer-caption text-center d-flex justify-content-center">
          <span>{customerCaption}</span>
        </div>
      </Container>
    </div>
  );
};
export default Person;
