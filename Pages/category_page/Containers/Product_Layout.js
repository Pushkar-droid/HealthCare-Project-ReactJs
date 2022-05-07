import React from "react";
import { NavLink } from "react-router-dom";

function Product_Layout() {
  let n = [1,2];
  let image = [
    ["images/product/product1.jpg", "images/product/product1-1.jpg"],
    ["images/product/product2.jpg", "images/product/product2-1.jpg"],
    ["images/product/product3.jpg", "images/product/product3-1.jpg"],
    ["images/product/product4.jpg", "images/product/product4-1.jpg"],
    ["images/product/product5.jpg", "images/product/product5-1.jpg"],
    ["images/product/product6.jpg", "images/product/product6-1.jpg"],
    ["images/product/product7.jpg", "images/product/product7-1.jpg"],
    ["images/product/product8.jpg", "images/product/product8-1.jpg"],
  ];
  return (
    <>
      {n.map((n) => {
        return (
          <>
            {image.map((img) => {
              return (
                <>
                  <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                    <div className="item">
                      <div className="product-thumb clearfix mb_30">
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
                            <a href="#" title="Casual Shirt With Ruffle Hem">
                              Latin literature from 45 BC, making it over old.
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
                          <p className="product-desc mt_20 mb_60">
                            More room to move. With 80GB or 160GB of storage and
                            up to 40 hours of battery life, the new iPod classic
                            lets you enjoy up to 40,000 songs or up to 200 hours
                            of video or any combination wherever you go.Cover
                            Flow. Browse through your music collection by
                            flipping..
                          </p>
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
          </>
        );
      })}
    </>
  );
}

export default Product_Layout;
