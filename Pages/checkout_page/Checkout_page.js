import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Brand_Logo from '../../Components/Brand_Logo'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Side_menu from '../../Components/Side_menu'
import Top_products from '../../Components/Top_products'
import Accordion from './Components/Accordion'

function Checkout_page() {
  let Navigate = useNavigate()
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
          <div className="left_banner left-sidebar-widget mb_50 mt_30"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="left-special left-sidebar-widget mb_50">
            <div className="heading-part mb_20 ">
              <h2 className="main_title">Top Products</h2>
            </div>
            <div id="left-special" className="owl-carousel">
              <Top_products />
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/* =====  BANNER STRAT  ===== */}
          <div className="breadcrumb ptb_20">
            <h1>Shopping Cart</h1>
            <ul>
              <li><NavLink to="/index-2">Home</NavLink></li>
              <li className="active">Shopping Cart</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <Accordion />
        </div>
      </div>
      <div id="brand_carouse" className="ptb_30 text-center">
        <div className="type-01">
          <div className="heading-part mb_20 ">
            <h2 className="main_title">Brand Logo</h2>
          </div>
          <Brand_Logo />
        </div>
      </div>
    </div>
    {/* =====  CONTAINER END  ===== */}
    {/* =====  FOOTER START  ===== */}
    <Footer />
    {/* =====  FOOTER END  ===== */}
  </div>
  <a id="scrollup">Scroll</a>
</>

  )
}

export default Checkout_page
