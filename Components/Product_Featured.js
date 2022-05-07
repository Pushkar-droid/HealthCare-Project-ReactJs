import React from "react";
import { NavLink } from "react-router-dom";

function Product_Featured() {
  let featured = [
    { head: "Feature", div_id: "featu-pro" },
    { head: "Bestseller", div_id: "bests-pro" },
    { head: "New Item’s", div_id: "new-pro" },
  ];
  let ul_arr = [1, 2, 3, 4];
  let image = [
    ["images/product/product1.jpg", "images/product/product2.jpg"],
    ["images/product/product3.jpg", "images/product/product4.jpg"],
    ["images/product/product5.jpg", "images/product/product6.jpg"],
  ];

  return (
    <>
      {featured.map((featu) => {
        return (
          <div className="col-md-4">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">{featu.head}</h2>
            </div>
            <div id={featu.div_id} className="owl-carousel">
              {ul_arr.map((e) => {
                return (
                  <>
                    {
                      <ul className="row ">
                        {image.map((img) => {
                          return (
                            <>
                            {
                              <li className="item product-layout-left mb_20" key={e}>
                              <div className="product-list col-xs-4">
                                <div className="product-thumb">
                                  <div className="image product-imageblock">
                                    <NavLink to="/product_detail_page">
                                      <img
                                        className="img-responsive"
                                        title="iPod Classic"
                                        alt="iPod Classic"
                                        src={img[0]}
                                      />
                                      <img
                                        className="img-responsive"
                                        title="iPod Classic"
                                        alt="iPod Classic"
                                        src={img[1]}
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
                            }
                            </>
                          )
                        })}
                      </ul>
                    }
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product_Featured;
