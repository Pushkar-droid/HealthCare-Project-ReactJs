import React from "react";
import { NavLink } from "react-router-dom";

function Top_products() {
  let ar = [1, 2, 3];
//   let image = [
//     [
//       ["images/product/product1.jpg", "images/product/product1-1.jpg"],
//       ["images/product/product2.jpg", "images/product/product2-1.jpg"],
//       ["images/product/product2-1.jpg", "images/product/product2-1.jpg"],
//     ],
//     [
//       ["images/product/product3.jpg", "images/product/product3-1.jpg"],
//       ["images/product/product4.jpg", "images/product/product4-1.jpg"],
//       ["images/product/product2-1.jpg", "images/product/product2-1.jpg"],
//     ],
//     [
//       ["images/product/product5.jpg", "images/product/product5-1.jpg"],
//       ["images/product/product6.jpg", "images/product/product6-1.jpg"],
//       ["images/product/product2-1.jpg", "images/product/product2-1.jpg"],
//     ],
//   ];
let image = [
    {img: "images/product/product5.jpg", sub_img:"images/product/product5-1.jpg"},
    {img: "images/product/product6.jpg", sub_img:"images/product/product6-1.jpg"},
    {img: "images/product/product7.jpg", sub_img:"images/product/product7-1.jpg"}
]
  
  return (
    <>
      {ar.map((e) => {
        return (
          <>
            <ul className="row ">
              {image.map((el) => {
                return (
                  <>
                          <li className="item product-layout-left mb_20">
                            <div className="product-list col-xs-4">
                              <div className="product-thumb">
                                <div className="image product-imageblock">
                                  <NavLink to="/product_detail_page">
                                    <img
                                      className="img-responsive"
                                      title="iPod Classic"
                                      alt="iPod Classic"
                                      src={el.img}
                                    />
                                    <img
                                      className="img-responsive"
                                      title="iPod Classic"
                                      alt="iPod Classic"
                                      src={el.sub_img}
                                    />
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-8">
                              <div className="caption product-detail">
                                <h6 className="product-name">
                                  <a href="#">
                                    Latin literature from 45 BC, making it over
                                    old.
                                  </a>
                                </h6>
                                <div className="rating">
                                  <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                    <i className="fa fa-star fa-stack-1x" />
                                  </span>
                                  <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                    <i className="fa fa-star fa-stack-1x" />
                                  </span>
                                  <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                    <i className="fa fa-star fa-stack-1x" />
                                  </span>
                                  <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                    <i className="fa fa-star fa-stack-1x" />
                                  </span>
                                  <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                    <i className="fa fa-star fa-stack-x" />
                                  </span>
                                </div>
                                <span className="price">
                                  <span className="amount">
                                    <span className="currencySymbol">$</span>
                                    70.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </li>
                  </>
                );
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}

export default Top_products;
