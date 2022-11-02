import { Container } from "react-bootstrap";
import { useState } from "react";
//<-------------------Components-------------------------->
import Chef from "./InnerComponents/Chef";
//<-------------------Components-------------------------->

//<-------------------Images-------------------------->.
import chef1Img from "../assets/img/persons/chef1.jpg";
import chef2Img from "../assets/img/persons/chef2.jpg";
import chef3Img from "../assets/img/persons/chef3.jpg";
import chef4Img from "../assets/img/persons/chef4.jpg";
import chef5Img from "../assets/img/persons/chef5.jpg";
import mangerImg from "../assets/img/persons/manger1.jpg";
//<-------------------Images-------------------------->
const OurTeam = () => {
  const [chefsState, setChefs] = useState([
    {
      id: 1,
      name: "sara chris",
      img: chef1Img,
      role: "head chef",
      quote: "cooking is fun",
    },
    {
      id: 2,
      name: "jhon doe",
      img: chef5Img,
      role: "assistant chef",
      quote: "i love cooking",
    },
    {
      id: 3,
      name: "Lana Wick",
      img: chef3Img,
      role: "assistant chef",
      quote: "build your dream",
    },
    {
      id: 4,
      name: "chris hanz",
      img: mangerImg,
      role: "manger",
      quote: "awsome place to work",
    },
    {
      id: 5,
      name: "michale jordan",
      img: chef4Img,
      role: "assistant chef",
      quote: "magic can be food",
    },
    {
      id: 6,
      name: "jhoana frizz",
      img: chef2Img,
      role: "sous chef",
      quote: "cooking is for every one",
    },
  ]);
  return (
    <div className="our-team my-5">
      <div className="alterproducts-title  my-3 flexed">
        <span className="pb-2">our team</span>
        <span className="red-line"></span>
      </div>
      <Container>
        <div className="container-fluid">
          <ol className="row p-0">
            {chefsState.map((chef) => {
              return (
                <li
                  key={chef.name.trim().toLowerCase() + chef.id}
                  className="col-lg-4 col-6 d-flex flex-column justify-content-center align-items-center"
                >
                  <Chef
                    key={chef.name.trim().toLowerCase() + chef.id}
                    chefKey={chef.name.trim().toLowerCase() + chef.id}
                    chefImg={chef.img}
                    chefName={chef.name}
                    chefRole={chef.role}
                    chefQuote={chef.quote}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </div>
  );
};
export default OurTeam;
