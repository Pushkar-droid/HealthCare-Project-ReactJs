import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Brand_Logo from '../../Components/Brand_Logo';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Side_menu from '../../Components/Side_menu';
import Top_products from '../../Components/Top_products';
import Location from './Container/Location';

function Cart_page() {
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
          <form encType="multipart/form-data" method="post" action="#">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a></td>
                    <td className="text-left"><NavLink to="/product">iPhone</NavLink></td>
                    <td className="text-left">product 11</td>
                    <td className="text-left">
                      <div style={{maxWidth: 200}} className="input-group btn-block">
                        <input type="text" className="form-control quantity" size={1} defaultValue={1} name="quantity" />
                        <span className="input-group-btn">
                          <button className="btn" data-toggle="tooltip" type="submit" data-original-title="Update"><i className="fa fa-refresh" /></button>
                          <button className="btn btn-danger"  data-toggle="tooltip" type="button" data-original-title="Remove"><i className="fa fa-times-circle" /></button>
                        </span></div>
                    </td>
                    <td className="text-right">$254.00</td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <h3 className="mtb_10">What would you like to do next?</h3>
          <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
          <div className="panel-group mt_20" id="accordion">
            <div className="panel panel-default pull-left">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Use Coupon Code <i className="fa fa-caret-down" /></a></h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <label htmlFor="input-coupon" className="col-sm-4 control-label">Enter your coupon here</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="input-coupon" placeholder="Enter your coupon here" defaultValue name="coupon" />
                    <span className="input-group-btn">
                      <input type="button" className="btn" data-loading-text="Loading..." id="button-coupon" defaultValue="Apply Coupon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default pull-left">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Use Gift Voucher <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                  <label htmlFor="input-voucher" className="col-sm-4 control-label">Enter your gift voucher code here</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="input-voucher" placeholder="Enter your gift voucher code here" defaultValue name="voucher" />
                    <span className="input-group-btn">
                      <input type="button" className="btn" data-loading-text="Loading..." id="button-voucher" defaultValue="Apply Voucher" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default pull-left">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Estimate Shipping &amp; Taxes <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>Enter your destination to get a shipping estimate.</p>
                 <Location />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="text-right"><strong>Sub-Total:</strong></td>
                    <td className="text-right">$210.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>Eco Tax (-2.00):</strong></td>
                    <td className="text-right">$2.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>VAT (20%):</strong></td>
                    <td className="text-right">$42.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>Total:</strong></td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <form action="http://html.lionode.com/healthcare/hc001/index.html"> */}
          <form onSubmit={() => navigate('/index')}>
            <input className="btn pull-left mt_30" type="submit" defaultValue="Continue Shopping" />
          </form>
          {/* <form action="http://html.lionode.com/healthcare/hc001/checkout.html"> */}
          <form onSubmit={() => navigate('/checkout')}>
            <input className="btn pull-right mt_30" type="submit" defaultValue="Checkout" />
          </form>
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

export default Cart_page
