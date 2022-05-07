import React from "react";
import { NavLink } from "react-router-dom";

function Product_Tab() {
  let productcard = [
    { id: "nArrivals", class: "nArrivals owl-carousel" },
    { id: "Bestsellers", class: "Bestsellers owl-carousel" },
    { id: "Featured", class: "Featured owl-carousel" },
  ];
  let images = [
    [
      "images/product/product1.jpg",
      "images/product/product1-1.jpg",
      "images/product/product2.jpg",
      "images/product/product2-1.jpg",
    ],[
      "images/product/product3.jpg",
      "images/product/product3-1.jpg",
      "images/product/product4.jpg",
      "images/product/product4-1.jpg"
    ],[
      "images/product/product5.jpg",
      "images/product/product5-1.jpg",
      "images/product/product6.jpg",
      "images/product/product6-1.jpg"
    ],[
      "images/product/product7.jpg",
      "images/product/product7-1.jpg",
      "images/product/product8.jpg",
      "images/product/product8-1.jpg"
    ],[
      "images/product/product8.jpg",
      "images/product/product8-1.jpg",
      "images/product/product10.jpg",
      "images/product/product10-1.jpg"
    ],
  ];
  return (
    <>
      {productcard.map((element) => {
        return (
          <>
            <div className={element.id!=="nArrivals" ? "tab-pane" : "tab-pane active"} id={element.id}>
              <div className={element.class}>
                {images.map((img) => {
                  return (
                    <>
                      <div className="product-grid">
                        <div className="item">
                          <div className={"product-thumb mb_30"}>
                            <div className="image product-imageblock">
                              <NavLink to="/product_detail_page">
                                <img
                                  data-name="product_image"
                                  src={img[0]}
                                  alt="iPod Classic"
                                  title="iPod Classic"
                                  className="img-responsive"
                                />
                                <img
                                  src={img[1]}
                                  alt="iPod Classic"
                                  title="iPod Classic"
                                  className="img-responsive"
                                />
                              </NavLink>
                            </div>
                            <div className="caption product-detail text-left">
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
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
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                              <div className="button-group text-center">
                                <div className="wishlist">
                                  <a href="#">
                                    <span>wishlist</span>
                                  </a>
                                </div>
                                <div className="quickview">
                                  <a href="#">
                                    <span>Quick View</span>
                                  </a>
                                </div>
                                <div className="compare">
                                  <a href="#">
                                    <span>Compare</span>
                                  </a>
                                </div>
                                <div className="add-to-cart">
                                  <a href="#">
                                    <span>Add to cart</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product-thumb">
                            <div className="image product-imageblock">
                              <NavLink to="/product_detail_page">
                                <img
                                  data-name="product_image"
                                  src={img[2]}
                                  alt="iPod Classic"
                                  title="iPod Classic"
                                  className="img-responsive"
                                />
                                <img
                                  src={img[3]}
                                  alt="iPod Classic"
                                  title="iPod Classic"
                                  className="img-responsive"
                                />
                              </NavLink>
                            </div>
                            <div className="caption product-detail text-left">
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
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
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                              <div className="button-group text-center">
                                <div className="wishlist">
                                  <a href="#">
                                    <span>wishlist</span>
                                  </a>
                                </div>
                                <div className="quickview">
                                  <a href="#">
                                    <span>Quick View</span>
                                  </a>
                                </div>
                                <div className="compare">
                                  <a href="#">
                                    <span>Compare</span>
                                  </a>
                                </div>
                                <div className="add-to-cart">
                                  <a href="#">
                                    <span>Add to cart</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Product_Tab;
