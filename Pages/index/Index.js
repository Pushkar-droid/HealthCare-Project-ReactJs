import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Blog from '../../Components/Blog'
import Item_product from '../../Components/Item_product'
import Product_Featured from '../../Components/Product_Featured' 
import Product_Tab from '../../Components/Product_Tab'
import Side_menu from '../../Components/Side_menu'
import Sub_Banner from '../../Components/Sub_Banner'
import Testimonial from '../../Components/Testimonial'
import Top_products from '../../Components/Top_products'
import Left_Banner from '../../Components/Left_Banner'
import Tags from '../../Components/Tags'
import Modals from '../../Components/Modals'

function Index() {
  return (
      <>
  {/* <div className="loder" /> */}
  <div className="wrapper">
    <Modals />
    {/* =====  HEADER START  ===== */}
    <Header />
    {/* =====  HEADER END  ===== */}
    {/* =====  CONTAINER START  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Side_menu />
          <Left_Banner />
          <div className="left-special left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Top Products</h2>
            </div>
            <div id="left-special" className="owl-carousel">
              <Top_products />
            </div>
          </div>
          <div className="left_banner left-sidebar-widget mb_50"> <a href="#"><img src="images/left2.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <Testimonial />
          <Tags />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <Banner />
          {/* =====  BANNER END  ===== */}
          {/* =====  SUB BANNER  STRAT ===== */}
          <Sub_Banner />
          {/* =====  SUB BANNER END  ===== */}
          {/* =====  PRODUCT TAB  ===== */}
          <div id="product-tab" className="mt_40">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Home Electronics</h2>
            </div>
            <ul className="nav text-right">
              <li className="active"> <a href="#nArrivals" data-toggle="tab">New Arrivals</a> </li>
              <li><a href="#Bestsellers" data-toggle="tab">Bestsellers</a> </li>
              <li><a href="#Featured" data-toggle="tab">Featured</a> </li>
            </ul>
            <div className="tab-content clearfix box">
              <Product_Tab />
            </div>
          </div>
          {/* =====  PRODUCT TAB  END ===== */}
          {/* =====  SUB BANNER  STRAT ===== */}
          <div className="row">
            <div className="cms_banner mt_40 mb_50">
              <div className="col-xs-12">
                <div id="subbanner3" className="banner sub-hover"> <a href="#"><img src="images/sub3.jpg" alt="Sub Banner3" className="img-responsive" /></a> </div>
              </div>
            </div>
          </div>
          {/* =====  SUB BANNER END  ===== */}
          {/* =====  sale product  ===== */}
          <div id="sale-product">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Home Electronics</h2>
            </div>
            <div className="Specials owl-carousel">
              <Item_product />
            </div>
          </div>
          {/* =====  sale product end ===== */}
          {/* =====  SUB BANNER  STRAT ===== */}
          <div className="row">
            <div className="cms_banner mt_60 mb_50">
              <div className="col-xs-12">
                <div id="subbanner4" className="banner sub-hover"> <a href="#"><img src="images/sub4.jpg" alt="Sub Banner4" className="img-responsive" /></a>
                  <div className="bannertext"> </div>
                </div>
              </div>
            </div>
          </div>
          {/* =====  SUB BANNER END  ===== */}
          {/* =====  product ===== */}
          <div className="row">
              <Product_Featured />
            {/* =====  product end  ===== */}
            {/* =====  Blog ===== */}
          <div id="Blog" className="mt_40">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Latest from the Blog</h2>
            </div>
            <div className="blog-contain box">
              <div className="blog owl-carousel ">
                <Blog />
              </div>
            </div>
            {/* =====  Blog end ===== */}
          </div>
        </div>
      </div>
    </div>
    {/* =====  CONTAINER END  ===== */}
    {/* =====  FOOTER START  ===== */}
    <Footer />
    {/* =====  FOOTER END  ===== */}
  </div></div>
  <a id="scrollup">Scroll</a>
    </>
  )
}

export default Index