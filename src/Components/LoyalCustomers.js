import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Person from "./InnerComponents/preson";
//<-------------------Images-------------------------->
import p1Img from "../assets/img/persons/p1.jpg";
import p2Img from "../assets/img/persons/p2.jpg";
import p3Img from "../assets/img/persons/p3.jpg";
import p4Img from "../assets/img/persons/p4.jpg";
//<-------------------Images-------------------------->
const LoyalCustomers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Rebicca Bullok",
      imageUrl: p1Img,
      caption:
        "Ullamco aute culpa ullamco do officia cillum fugiat aliqua reprehenderit aliqua minim quis ad aliquip. Ut eu dolor et eiusmod aliqua enim Lorem exercitation sint dolore enim sint labore ad. Enim in laboris cupidatat veniam qui occaecat.",
      hisRating: "",
    },
    {
      id: 2,
      name: "Jhonas Adams",
      imageUrl: p2Img,
      caption:
        "Ullamco aute culpa ullamco do officia cillum fugiat aliqua reprehenderit aliqua minim quis ad aliquip. Ut eu dolor et eiusmod aliqua enim Lorem exercitation sint dolore enim sint labore ad. Enim in laboris cupidatat veniam qui occaecat.",
      hisRating: "",
    },
    {
      id: 3,
      name: "Sam Smith",
      imageUrl: p3Img,
      caption:
        "Ullamco aute culpa ullamco do officia cillum fugiat aliqua reprehenderit aliqua minim quis ad aliquip. Ut eu dolor et eiusmod aliqua enim Lorem exercitation sint dolore enim sint labore ad. Enim in laboris cupidatat veniam qui occaecat.",
      hisRating: "",
    },
    {
      id: 4,
      name: "Adam Taylor",
      imageUrl: p4Img,
      caption:
        "Ullamco aute culpa ullamco do officia cillum fugiat aliqua reprehenderit aliqua minim quis ad aliquip. Ut eu dolor et eiusmod aliqua enim Lorem exercitation sint dolore enim sint labore ad. Enim in laboris cupidatat veniam qui occaecat.",
      hisRating: "",
    },
  ]);
  return (
    <div>
      <div className="alterproducts-title mb-3 flexed">
        <span className="pb-2">our customers opinions</span>
        <span className="red-line"></span>
      </div>
      <div className="container-fluid px-0 loyal-customers-container">
        <div className="bg-fade py-5 d-flex justify-content-center align-items-center">
          <div className="carousel-container">
            <Container>
              <Carousel
                indicatorLabels={customers.map((c) => {
                  return c.name;
                })}
              >
                {customers.map((customer) => {
                  return (
                    <Carousel.Item
                      key={customer.name.trim().toLowerCase() + customer.id}
                    >
                      <Container className="d-flex justify-content-center">
                        <Person
                          key={customer.name.trim().toLowerCase() + customer.id}
                          customerkey={
                            customer.name.trim().toLowerCase() + customer.id
                          }
                          customerName={customer.name}
                          customerImg={customer.imageUrl}
                          customerCaption={customer.caption}
                          customerRate={customer.hisRating}
                        />
                      </Container>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoyalCustomers;
