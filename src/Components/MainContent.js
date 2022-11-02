import { useState } from "react";
//<-------------------Images-------------------------->
import BakingImg from "../assets/img/baking.webp";
import varietyPizzaImg from "../assets/img/varietypizza.webp";
import makePizzaImg from "../assets/img/makePizza.webp";
//<-------------------Images-------------------------->
//<-------------------Components-------------------------->
import Carousel from "./InnerComponents/Carousel";
import AboutUs from "./InnerComponents/AboutUs";
import Services from "./InnerComponents/Services";
import AlterProducts from "./AlterProducts";
import LoyalCustomers from "./LoyalCustomers";
import OurTeam from "./OurTeam";
import BookaTable from "./InnerComponents/BookaTable";
//<-------------------Components-------------------------->

const MainContent = () => {
  const [servicesState, servicesSetState] = useState([
    {
      id: 1,
      title: "order your pizza dough",
      description:
        "Amet in nisi ut irure pariatur ullamco magna nisi non commodo eiusmod sunt aute irure. Minim eu minim ut tempor ad aute Lorem minim duis proident. Magna sint consequat ad deserunt amet minim aliqua dolor cupidatat mollit aute. Excepteur magna sint proident non dolor reprehenderit consequat veniam pariatur non.Fugiat exercitation dolor magna sint tempor et pariatur laboris veniam elit. Officia mollit adipisicing eu aliqua nulla excepteur aliqua anim cillum irure velit. Id tempor sint eiusmod velit sint Lorem culpa adipisicing id tempor.",
      image: BakingImg,
      classes: {
        descriptionClasses:
          "baking-description-holder align-item-center col-12 col-lg-6 order-2 order-lg-1",
        imageClasses:
          "col-12 col-lg-6 order-1 px-0 order-lg-2 baking-img-holder",
      },
    },
    {
      id: 2,
      title: "Choose your favorite pizza",
      description:
        "Amet in nisi ut irure pariatur ullamco magna nisi non commodo eiusmod sunt aute irure. Minim eu minim ut tempor ad aute Lorem minim duis proident. Magna sint consequat ad deserunt amet minim aliqua dolor cupidatat mollit aute. Excepteur magna sint proident non dolor reprehenderit consequat veniam pariatur non.Fugiat exercitation dolor magna sint tempor et pariatur laboris veniam elit. Officia mollit adipisicing eu aliqua nulla excepteur aliqua anim cillum irure velit. Id tempor sint eiusmod velit sint Lorem culpa adipisicing id tempor.",
      image: varietyPizzaImg,
      classes: {
        descriptionClasses:
          "baking-description-holder align-item-center col-12 col-lg-6 order-2",
        imageClasses: "col-12 col-lg-6 order-1 px-0  baking-img-holder",
      },
    },
    {
      id: 3,
      title: "have fun making your own pizza",
      description:
        "Amet in nisi ut irure pariatur ullamco magna nisi non commodo eiusmod sunt aute irure. Minim eu minim ut tempor ad aute Lorem minim duis proident. Magna sint consequat ad deserunt amet minim aliqua dolor cupidatat mollit aute. Excepteur magna sint proident non dolor reprehenderit consequat veniam pariatur non.Fugiat exercitation dolor magna sint tempor et pariatur laboris veniam elit. Officia mollit adipisicing eu aliqua nulla excepteur aliqua anim cillum irure velit. Id tempor sint eiusmod velit sint Lorem culpa adipisicing id tempor.",
      image: makePizzaImg,
      classes: {
        descriptionClasses:
          "baking-description-holder align-item-center col-12 col-lg-6 order-2 order-lg-1",
        imageClasses:
          "col-12 col-lg-6 order-1 px-0 order-lg-2 baking-img-holder",
      },
    },
  ]);

  return (
    <div className="main-content">
      <Carousel />
      <AboutUs />
      {servicesState.map((service) => {
        return (
          <Services
            key={service.id}
            classes={service.classes}
            img={service.image.trim()}
            title={service.title}
            description={service.description}
          />
        );
      })}
      <AlterProducts />
      <LoyalCustomers />
      <OurTeam />
      <BookaTable />
    </div>
  );
};
export default MainContent;
