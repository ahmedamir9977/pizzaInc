import { Container } from "react-bootstrap";
// import { useState } from "react";
const UIComponent = ({ uiTitle, uiData }) => {
  return (
    <div>
      <div className="form-header-container mt-5 mx-5 flex-column mb-4 d-flex justify-content-center align-items-center">
        <span className="form-header mb-2">{uiTitle}</span>
        <span className="red-line w-50"></span>
      </div>
      <Container
        fluid
        className="p-0 d-flex justify-content-center align-items-center"
      >
        <ul className="p-0 w-100 reservation-list">{}</ul>
      </Container>
    </div>
  );
};

export default UIComponent;
