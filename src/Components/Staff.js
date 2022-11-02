/*<-------------------------Components----------------------->*/
import {
  Container,
  Form,
  FloatingLabel,
  FormGroup,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import instance from "./axios";
/*<-------------------------Components----------------------->*/

/*<-------------------------Images----------------------->*/
/*<-------------------------Images----------------------->*/
import { useState } from "react";

const date = new Date();

const Staff = () => {
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setStaffData({
      ...staffData,
      [event.target.name]: event.target.value,
    });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const query = `/staff.json?orderBy="username"&equalTo="${staffData.username}"&print="pretty"`;
    instance.get(query).then((response) => {
      if (response.status === 200 && Object.keys(response.data).length !== 0) {
        const [userID] = Object.keys(response.data); //ID created by firebase
        if (
          response.data[userID].username === staffData.username &&
          response.data[userID].password === staffData.password
        ) {
          const query = `/staff/${userID}/.json`;
          const loginTime = `${date.getHours()}:${date.getMinutes()}`;
          const loginDate = `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`;
          const userIDPath = `${
            staffData.username +
            "_" +
            loginTime +
            "_" +
            loginDate +
            "_" +
            userID
          }`;
          instance
            .patch(query, {
              loginTime: loginTime,
              loggedIn: true,
              loginID: userIDPath,
            })
            .then((response) => {
              if (response.status === 200) {
                navigate(`/dashboard/${userIDPath}`, {
                  replace: false,
                  state: {
                    userId: userIDPath,
                  },
                });
              } else {
                console.log(response);
              }
              // instance.patch(query, { accessID:  }).then((response) => {});
            });
        } else {
          console.log("error");
        }
      } else {
        console.log("error");
      }
    });
    // instance.post("/staff.json", { ...staffData }).then((response) => {
    //   console.log(response);
    // });
  };

  return (
    <div className="staff-container container-fluid p-0 fullHeight">
      <div className="bg-fade fullHeight d-flex p-0 justify-content-center align-items-center">
        <Container className="d-flex align-items-center justify-content-center">
          <div className="form-container p-5 rounded">
            <div className="form-header-container flex-column mb-4 d-flex justify-content-center align-items-center">
              <span className="form-header mb-2">Sign in</span>
              <span className="red-line w-50"></span>
            </div>
            <Form autoComplete="off" onSubmit={loginHandler}>
              <FormGroup>
                <FloatingLabel
                  controlId="floatingInputUserName"
                  label="user name"
                  className="mb-3"
                >
                  <Form.Control
                    name="username"
                    type="text"
                    className="login-input"
                    placeholder="enter your name"
                    value={staffData.username}
                    onChange={changeHandler}
                    required
                  />
                </FloatingLabel>
              </FormGroup>
              <FormGroup>
                <FloatingLabel
                  controlId="floatingInputPassword"
                  label="Password"
                >
                  <Form.Control
                    name="password"
                    type="password"
                    className="password-input"
                    placeholder="Password"
                    value={staffData.password}
                    onChange={changeHandler}
                    required
                  />
                </FloatingLabel>
              </FormGroup>
              <Button
                type="submit"
                size="lg"
                className="w-100 mt-3"
                disabled={false}
                variant="danger"
              >
                Login
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Staff;
