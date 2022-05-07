import React from 'react'
import { NavLink } from 'react-router-dom'

function Blog_Item() {
    let image = ["images/blog/blog_img_04.jpg", "images/blog/blog_img_05.jpg", "images/blog/blog_img_06.jpg", "images/blog/blog_img_07.jpg", "images/blog/blog_img_08.jpg", "images/blog/blog_img_03.jpg", "images/blog/blog_img_01.jpg", "images/blog/blog_img_02.jpg"]
  return (
      <>
      {
        image.map((img)=>{
            return(
                <>
                    <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><NavLink to="/single_blog"> <img src={img} alt="HealthCare" /></NavLink></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true" /></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <NavLink to="/single_blog">Unknown printer took a galley book.</NavLink> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true" />11 May 2017 </div>
                    <div className="more pull-right"> <NavLink to="/single_blog">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true" /></NavLink></div>
                  </div>
                </div>
              </div>
                </>
            )
        })
      }
      </>
    
  )
}

export default Blog_Item
