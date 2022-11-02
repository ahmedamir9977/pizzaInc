import { useState } from "react";
//<-------------------Components-------------------------->
import Product from "./InnerComponents/Product";
//<-------------------Components-------------------------->
//<-------------------Images-------------------------->
import Burger from "../assets/img/Burger.webp";
import Shawrma from "../assets/img/shawrma.webp";
import Stripes from "../assets/img/stripes.webp";
import Broasted from "../assets/img/broasted.webp";
//<-------------------Images-------------------------->

const AlterProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productImg: Burger,
      productName: "tasty burger",
    },
    {
      id: 2,
      productImg: Shawrma,
      productName: "chicken/beef shawrma",
    },
    {
      id: 3,
      productImg: Stripes,
      productName: "chicken stripes",
    },
    {
      id: 4,
      productImg: Broasted,
      productName: "broasted chicken",
    },
  ]);
  return (
    <div className="container-fluid pt-5">
      <div className="alterproducts-title mb-3 flexed">
        <span className="pb-2">we also serve</span>
        <span className="red-line"></span>
      </div>
      <ol className="row p-0">
        {products.map((product) => {
          return (
            <li
              key={product.productName.trim().toLowerCase() + product.id}
              className="col-6 col-lg-3 d-flex align-items-center justify-content-center py-5"
            >
              <Product
                key={product.productName.trim().toLowerCase() + product.id}
                productKey={
                  product.productName.trim().toLowerCase() + product.id
                }
                imgSrc={product.productImg}
                productName={product.productName}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default AlterProducts;
