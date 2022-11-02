/*<-------------------------Components----------------------->*/
import {
  Container,
  Form,
  FloatingLabel,
  FormGroup,
  Button,
} from "react-bootstrap";

import instance from "./axios";
/*<-------------------------Components----------------------->*/
/*<-------------------------Images----------------------->*/
import successImg from "../assets/img/success.png";
import errorImg from "../assets/img/error.png";
/*<-------------------------Images----------------------->*/

import { useState } from "react";

const date = new Date();

const BookaTableComponent = () => {
  const [reservationState, setReservationState] = useState({
    customerName: "",
    customerPhone: "",
    noOfCustomers: "",
    reservationTime: "",
    reservationDate: "",
  });

  const [UIResponse, setUResponse] = useState({
    noSubmission: true,
    submissionSuccess: false,
    valueAlreadyExist: false,
    error: false,
  });

  const changeHandler = (event) => {
    const dateOfSubmit = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    setReservationState({
      ...reservationState,
      [event.target.name]: event.target.value,
      reservationID:
        reservationState.customerName.replace(/\s+/g, "").toLowerCase() +
        "-phone(" +
        reservationState.customerPhone +
        ")-Date(" +
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` +
        ")-time(" +
        `${date.getHours() + ":" + date.getMinutes()}` +
        ")".toString(),
      dateOfSubmit,
    });
  };

  const sendReservation = (reservationState) => {
    instance
      .post("/reservations.json", { ...reservationState })
      .then((response) => {
        if (response.status === 200) {
          setUResponse({
            noSubmission: false,
            submissionSuccess: true,
            valueAlreadyExist: false,
            error: false,
          });
          console.log(response);
        } else {
          setUResponse({
            noSubmission: false,
            submissionSuccess: false,
            valueAlreadyExist: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          setUResponse({
            noSubmission: false,
            submissionSuccess: false,
            valueAlreadyExist: false,
            error: true,
          });
        } else {
          console.log("no");
        }
      });
  };

  const returnToForm = () => {
    setUResponse({
      noSubmission: true,
      submissionSuccess: false,
      valueAlreadyExist: false,
      error: false,
    });

    setReservationState({
      customerName: "",
      customerPhone: "",
      noOfCustomers: "",
      reservationTime: "",
      reservationDate: "",
    });
  };

  const submitReservation = (e) => {
    e.preventDefault();
    const registrationID = reservationState.reservationID;
    const query = `/reservations.json?orderBy="reservationID"&equalTo="${registrationID}"&print="pretty"`;

    instance
      .get(query.toString())
      .then((response) => {
        if (
          response.status === 200 &&
          Object.keys(response.data).length === 0
        ) {
          sendReservation(reservationState);
        } else {
          console.log(response.data);
          setUResponse({
            noSubmission: false,
            submissionSuccess: false,
            valueAlreadyExist: true,
            error: false,
          });
        }
      })
      .catch((error) => {
        if (error) {
          setUResponse({
            noSubmission: false,
            submissionSuccess: false,
            valueAlreadyExist: false,
            error: true,
          });
        } else {
          console.log("no");
        }
      });
  };

  if (UIResponse.submissionSuccess) {
    return (
      <div className="container-fluid p-0 bookAtable fullHeight">
        <div className="fullHeight bg-fade d-flex justify-content-center">
          <Container className="w-100 d-flex align-items-center justify-content-center">
            <div className="form-container w-50 p-5 rounded d-flex justify-content-center align-items-center flex-column">
              <div className="success-img d-flex justify-content-center">
                <img
                  src={successImg}
                  className="img-fluid w-25 py-3"
                  alt="success img"
                />
              </div>
              <div className="success-content">
                <p>table booked successfully</p>
                <Button
                  size="lg success-btn"
                  className="w-100 mt-3"
                  disabled={false}
                  variant="success"
                  onClick={(e) => {
                    e.preventDefault();
                    returnToForm();
                  }}
                >
                  Book Another Table
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  } else if (UIResponse.noSubmission) {
    return (
      <div className="container-fluid p-0 bookAtable fullHeight">
        <div className="fullHeight bg-fade d-flex justify-content-center">
          <Container className="w-100 d-flex align-items-center justify-content-center">
            <div className="form-container p-5 rounded">
              <div className="form-header-container flex-column mb-4 d-flex justify-content-center align-items-center">
                <span className="form-header">table reservation</span>
                <span className="red-line w-50"></span>
              </div>
              <Form autoComplete="off" onSubmit={submitReservation}>
                <FormGroup>
                  <FloatingLabel
                    controlId="floatingInputName"
                    label="enter your name"
                    className="mb-3"
                  >
                    <Form.Control
                      name="customerName"
                      type="text"
                      placeholder="enter your name"
                      value={reservationState.customerName}
                      onChange={changeHandler}
                      required
                    />
                  </FloatingLabel>
                </FormGroup>
                <FormGroup>
                  <FloatingLabel
                    controlId="floatingInputPhone"
                    label="phone number"
                  >
                    <Form.Control
                      name="customerPhone"
                      type="number"
                      placeholder="phone number"
                      value={reservationState.customerPhone}
                      onChange={changeHandler}
                      required
                      minLength="11"
                      maxLength="11"
                    />
                  </FloatingLabel>
                </FormGroup>
                <FormGroup className="pt-3">
                  <Form.Select
                    name="noOfCustomers"
                    size="lg"
                    aria-label="Default select example"
                    value={reservationState.noOfCustomers}
                    onChange={changeHandler}
                  >
                    <option
                      className="none-choice"
                      key="blankChoice"
                      hidden
                      value
                    >
                      Number Of Persons
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Form.Select>
                </FormGroup>
                <FormGroup className="pt-3">
                  <Form.Control
                    type="time"
                    size="lg"
                    name="reservationTime"
                    onChange={changeHandler}
                    value={reservationState.reservationTime}
                    min="11:00"
                    max="22:58"
                  />
                </FormGroup>
                <FormGroup className="pt-3">
                  <Form.Control
                    type="date"
                    size="lg"
                    placeholder="date of reservation"
                    name="reservationDate"
                    value={reservationState.reservationDate}
                    onChange={changeHandler}
                    min={`${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`.toString()}
                    max="2022-12-31"
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </FormGroup>
                <Button
                  type="submit"
                  size="lg"
                  className="w-100 mt-3"
                  disabled={false}
                  variant="danger"
                >
                  Book Now
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      </div>
    );
  } else if (UIResponse.valueAlreadyExist) {
    return (
      <div className="container-fluid p-0 bookAtable fullHeight">
        <div className="fullHeight bg-fade d-flex justify-content-center">
          <Container className="w-100 d-flex align-items-center justify-content-center">
            <div className="form-container w-50 p-5 rounded d-flex justify-content-center align-items-center flex-column">
              <div className="success-img d-flex justify-content-center">
                <img
                  src={errorImg}
                  className="img-fluid w-25 py-3"
                  alt="success img"
                />
              </div>
              <div className="success-content">
                <p>Reservation Already Exist</p>
                <Button
                  size="lg"
                  className="w-100 mt-3"
                  disabled={false}
                  variant="danger"
                  onClick={(e) => {
                    e.preventDefault();
                    returnToForm();
                  }}
                >
                  Try Again
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  } else if (UIResponse.error) {
    return (
      <div className="container-fluid p-0 bookAtable fullHeight">
        <div className="fullHeight bg-fade d-flex justify-content-center">
          <Container className="w-100 d-flex align-items-center justify-content-center">
            <div className="form-container w-50 p-5 rounded d-flex justify-content-center align-items-center flex-column">
              <div className="success-img d-flex justify-content-center">
                <img
                  src={errorImg}
                  className="img-fluid w-25 py-3"
                  alt="success img"
                />
              </div>
              <div className="success-content">
                <p>no internet connection</p>
                <Button
                  size="lg"
                  className="w-100 mt-3"
                  disabled={false}
                  variant="danger"
                  onClick={(e) => {
                    e.preventDefault();
                    returnToForm();
                  }}
                >
                  Try Again
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
};
export default BookaTableComponent;
