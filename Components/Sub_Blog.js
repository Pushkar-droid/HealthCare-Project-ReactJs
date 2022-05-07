import React from 'react'
import { NavLink } from 'react-router-dom'

function Sub_Blog() {
    let image = ["images/blog/blog_img_01.jpg", "images/blog/blog_img_02.jpg", "images/blog/blog_img_03.jpg"]
  return (
    <div className="blog-item mb_20">
                  <div className="post-format col-xs-4">
                    <div className="thumb post-img"><NavLink to="/single_blog"> <img src="images/blog/blog_img_01.jpg" alt="HealthCare" /></NavLink></div>
                  </div>
                  <div className="post-info col-xs-8 ">
                    <h5> <NavLink to="/single_blog">Unknown printer took a galley book.</NavLink> </h5>
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                  </div>
    </div>
  )
}

export default Sub_Blog
