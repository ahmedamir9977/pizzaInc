import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookaTable = () => {
  return (
    <div className="book-a-table my-5">
      <div className="container-fluid">
        <Row className="p-0">
          <Col className="d-flex justify-content-center align-items-center"></Col>
          <Col className="py-5 button-holder d-flex justify-content-center align-items-center">
            <Container className="d-flex flex-column justify-content-center align-items-center">
              <div className="booking-description d-flex flex-column align-items-center">
                <span className="booking-description-header ">
                  What are you waiting for?
                </span>
                <span className="booking-description-caption py-5">
                  come and create happy memories
                </span>
              </div>
              <div className="button ">
                <Link to="/bookatable">
                  <Button variant="danger">Book A Table</Button>
                </Link>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default BookaTable;
