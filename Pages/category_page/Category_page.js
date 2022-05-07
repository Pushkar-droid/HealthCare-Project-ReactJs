import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' 
import Brand_Logo from '../../Components/Brand_Logo'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Side_menu from '../../Components/Side_menu'
import Top_products from '../../Components/Top_products'
import Product_Layout from './Containers/Product_Layout'

function Category_page() {
  let Navigate = useNavigate()
  return (
    <>
  {/* <div className="loder" /> */}
  <div className="wrapper">
    {/* =====  HEADER START  ===== */}
    <Header />
    {/* =====  HEADER END  ===== */}
    {/* =====  CONTAINER START  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Side_menu />
          <div className="filter left-sidebar-widget mb_50">
            <div className="heading-part mtb_20 ">
              <h2 className="main_title">Refinr Search</h2>
            </div>
            <div className="filter-block">
              <p>
                <label htmlFor="amount">Price range:</label>
                <input type="text" id="amount" readOnly />
              </p>
              <div id="slider-range" className="mtb_20" />
              <div className="list-group">
                <div className="list-group-item mb_10">
                  <label>Color</label>
                  <div id="filter-group1">
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Red (10)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Green (06)</label>
                    </div>
                    <div className="checkbox ">
                      <label>
                        <input defaultValue type="checkbox" /> Blue(09)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="list-group-item mb_10">
                  <label>Size</label>
                  <div id="filter-group3">
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Big (3)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Medium (2)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input defaultValue type="checkbox" /> Small (1)</label>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn">Refine Search</button>
              </div>
            </div>
          </div>
          <div className="left_banner left-sidebar-widget mb_50"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
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
            <h1>Products</h1>
            <ul>
              <li><NavLink to="/index-2">Home</NavLink></li>
              <li className="active">Products</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="category-page-wrapper mb_30">
            <div className="col-xs-6 sort-wrapper">
              <label className="control-label" htmlFor="input-sort">Sort By :</label>
              <div className="sort-inner">
                <select id="input-sort" className="form-control">
                  <option value="ASC"  select="selected">Default</option>
                  <option value="ASC">Name (A - Z)</option>
                  <option value="DESC">Name (Z - A)</option>
                  <option value="ASC">Price (Low &gt; High)</option>
                  <option value="DESC">Price (High &gt; Low)</option>
                  <option value="DESC">Rating (Highest)</option>
                  <option value="ASC">Rating (Lowest)</option>
                  <option value="ASC">Model (A - Z)</option>
                  <option value="DESC">Model (Z - A)</option>
                </select>
              </div>
              <span><i className="fa fa-angle-down" aria-hidden="true" /></span> </div>
            <div className="col-xs-4 page-wrapper">
              <label className="control-label" htmlFor="input-limit">Show :</label>
              <div className="limit">
                <select id="input-limit" className="form-control">
                  <option value={8}  select="selected">08</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={75}>75</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <span><i className="fa fa-angle-down" aria-hidden="true" /></span> </div>
            <div className="col-xs-2 text-right list-grid-wrapper">
              <div className="btn-group btn-list-grid">
                <button type="button" id="list-view" className="btn btn-default list-view" />
                <button type="button" id="grid-view" className="btn btn-default grid-view active" />
              </div>
            </div>
          </div>
          <div className="row">
            <Product_Layout />
          </div>
          <div className="pagination-nav text-center mt_50">
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
    {/* =====  FOOTER END  ===== */}</div>
    <a id="scrollup">Scroll</a>
</>

  )
}

export default Category_page
