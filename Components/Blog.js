import React from "react";
import { NavLink } from "react-router-dom";

function Blog() {
  let image = [
    "images/blog/blog_img_01.jpg",
    "images/blog/blog_img_02.jpg",
    "images/blog/blog_img_03.jpg",
    "images/blog/blog_img_04.jpg",
    "images/blog/blog_img_05.jpg",
    "images/blog/blog_img_06.jpg",
  ];
  return (
    <>
      {image.map((img) => {
        return (
          <>
            <div className="item">
              <div className="box-holder">
                <div className="thumb post-img">
                  <a href="#">
                    <img src={img} alt="HealthCare" />
                  </a>
                </div>
                <div className="post-info mtb_20 ">
                  <h6 className="mb_10 text-uppercase">
                    <NavLink to="/single_blog">
                      Unknown printer took a galley book.
                    </NavLink>
                  </h6>
                  <p>
                    Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                    feugiat ligula ullamcorper scelerisque. Morbi eu luctus
                    nisl.
                  </p>
                  <div className="date-time">
                    <div className="day"> 11</div>
                    <div className="month">Aug</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Blog;
