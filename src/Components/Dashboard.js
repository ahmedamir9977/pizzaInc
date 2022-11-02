/*<-------------------------Components----------------------->*/

import { Container } from "react-bootstrap";
/*<-------------------------Components----------------------->*/

import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import instance from "./axios";
import UIComponent from "./InnerComponents/dashboard/uiComponent";
const Dashboard = () => {
  const location = useLocation();

  const [userData, setUserData] = useState({
    username: "",
    role: "",
  });
  const [reservationData, setReservationData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [uiState, setUIState] = useState({
    reservationsUI: true,
    usersUI: false,
  });

  const changeUI = (uiName) => {
    if (uiName === "reservations") {
      setUIState({
        reservationsUI: true,
        usersUI: false,
      });
    } else if (uiName === "users") {
      setUIState({
        reservationsUI: false,
        usersUI: true,
      });
    }
  };

  const getUserData = (userIDinUrl) => {
    const query = `/staff.json?orderBy="loginID"&equalTo="${userIDinUrl}"&print="pretty"`;
    instance
      .get(query)
      .then((response) => {
        if (response.status === 200) {
          const userObject = response.data[Object.keys(response.data)];
          setUserData({
            username: userObject.username,
            role: userObject.role,
          });
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  };

  const getReservations = () => {
    const query = `/reservations.json?orderBy="reservationID"&print="pretty"`;
    instance
      .get(query)
      .then((response) => {
        if (response.status === 200) {
          const reservationsValues = Object.values(response.data).map(
            (Element) => {
              return Element;
            }
          );
          setReservationData([reservationsValues]);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const userIDinUrl = location.state.userId;
    getUserData(userIDinUrl);
    getReservations();
  }, []);

  useEffect(() => {
    getReservations();
  }, [uiState]);

  return (
    <div className="staff-container container-fluid p-0 fullHeight-nonav">
      <div className="bg-fade container-fluid  fullHeight-nonav d-flex p-0  align-items-center">
        <div className="navList-container rounded mx-2 w-25">
          <div className="form-header-container mt-5 mx-5 flex-column mb-4 d-flex justify-content-center align-items-center">
            <span className="form-header mb-2">{userData.username}</span>
            <span className="red-line w-50"></span>
          </div>
          <Container
            fluid
            className="p-0 d-flex justify-content-center align-items-center"
          >
            <ul className="p-0 w-100 nav-list">
              <li>
                <a
                  name="reservations"
                  className="d-block text-center py-2 text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    const buttonName = e.target.name;
                    changeUI(buttonName);
                  }}
                >
                  reservations
                </a>
              </li>
              <li>
                <a
                  name="users"
                  className="d-block text-center py-2 text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    const buttonName = e.target.name;
                    changeUI(buttonName);
                  }}
                >
                  users
                </a>
              </li>
              <li>
                <a
                  className="d-block text-center py-2 text-decoration-none"
                  // onClick={}
                >
                  logout
                </a>
              </li>
            </ul>
          </Container>
        </div>
        <div className="navList-container rounded mx-2 flex-grow-1">
          {uiState.reservationsUI ? (
            <UIComponent uiTitle="reservations" uiData={reservationData} />
          ) : (
            <UIComponent uiTitle={"users"} uiData={[]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
