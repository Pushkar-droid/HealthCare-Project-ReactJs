import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Header from '../../Components/Header';
import Side_menu from '../../Components/Side_menu';
import Blog_Item from './Containers/Blog_Item';
import Sub_Blog from '../../Components/Sub_Blog'
import Footer from '../../Components/Footer';
import Blog_Category from '../../Components/Blog_Category';

function Blog_page() {
  let navigate = useNavigate();
  return (
    <>
  {/* =====  LODER  ===== */}
  {/* <div className="loder" /> */}
  <div className="wrapper">
    {/* =====  HEADER START  ===== */}
    <Header />
    {/* =====  HEADER END  ===== */}
    {/* =====  CONTAINER START  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 hidden-xs">
          <Side_menu />
          <div className="left_banner left-sidebar-widget mt_30 mb_40"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <Blog_Category />
          <div className="left-blog left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Latest Post</h2>
            </div>
            <div id="left-blog">
              <div className="row ">
                <Sub_Blog />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="breadcrumb ptb_20">
            <h1>Blog</h1>
            <ul>
              <li><NavLink to="/index-2">Home</NavLink></li>
              <li className="active">Blog</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="row">
            <div className="three-col-blog text-left">
              <Blog_Item />
            </div>
          </div>
          <div className="pagination-nav text-center mtb_20">
            <ul>
              <li><a href="#"><i className="fa fa-angle-left" /></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i className="fa fa-angle-right" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* =====  CONTAINER END  ===== */}
  {/* =====  FOOTER START  ===== */}
  <Footer />
  {/* =====  FOOTER END  ===== */}
  <a id="scrollup">Scroll</a>
    </>
  )
}

export default Blog_page
