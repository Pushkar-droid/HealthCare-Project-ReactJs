import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {
  let Navigate = useNavigate();
  return (
    <header id="header">
  <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <ul className="header-top-left">
            <li className="language dropdown"> <span className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"> <img src="images/English-icon.gif" alt="img" /> English <span className="caret" /> </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#"><img src="images/English-icon.gif" alt="img" /> English</a></li>
                <li><a href="#"><img src="images/French-icon.gif" alt="img" /> French</a></li>
                <li><a href="#"><img src="images/German-icon.gif" alt="img" /> German</a></li>
              </ul>
            </li>
            <li className="currency dropdown"> <span className="dropdown-toggle" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"> USD <span className="caret" /> </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                <li><a href="#">USD</a></li>
                <li><a href="#">EUR</a></li>
                <li><a href="#">AUD</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="header-top-right text-right">
            <li className="account"><NavLink to="/login">My Account</NavLink></li>
            <li className="sitemap"><a href="#">Sitemap</a></li>
            <li className="cart"><NavLink to="/cart_page">My Cart</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header">
    <div className="container">
      <nav className="navbar">
        <div className="navbar-header mtb_20"> <NavLink className="navbar-brand" to="index-2"> <img alt="HealthCared" src="images/logo.png" /> </NavLink> </div>
        <div className="header-right pull-right mtb_50">
          <button className="navbar-toggle pull-left" type="button" data-toggle="collapse" data-target=".js-navbar-collapse"> <span className="i-bar"><i className="fa fa-bars" /></span></button>
          <div className="shopping-icon">
            <div className="cart-item " data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true" role="button">Item's : <span className="cart-qty">02</span></div>
            <div id="cart-dropdown" className="cart-menu collapse">
              <ul>
                <li>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td className="text-center"><a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a></td>
                        <td className="text-left product-name"><a href="#">MacBook Pro</a>
                          <span className="text-left price">$20.00</span>
                          <input className="cart-qty" name="product_quantity" min={1} defaultValue={1} type="number" />
                        </td>
                        <td className="text-center"><a className="close-cart"><i className="fa fa-times-circle" /></a></td>
                      </tr>
                      <tr>
                        <td className="text-center"><a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a></td>
                        <td className="text-left product-name"><a href="#">MacBook Pro</a>
                          <span className="text-left price">$20.00</span>
                          <input className="cart-qty" name="product_quantity" min={1} defaultValue={1} type="number" />
                        </td>
                        <td className="text-center"><a className="close-cart"><i className="fa fa-times-circle" /></a></td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-right"><strong>Sub-Total</strong></td>
                        <td className="text-right">$2,100.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                        <td className="text-right">$2.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>VAT (20%)</strong></td>
                        <td className="text-right">$20.00</td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>Total</strong></td>
                        <td className="text-right">$2,122.00</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  {/* <form action="http://html.lionode.com/healthcare/hc001/cart_page.html"> */}
                  <form onSubmit={() => Navigate('/cart_page')}>
                    <input className="btn pull-left mt_10" defaultValue="View cart" type="submit" />
                  </form>
                  {/* <form action="http://html.lionode.com/healthcare/hc001/checkout_page.html"> */}
                  <form onSubmit={() => Navigate('/checkout_page')}>
                    <input className="btn pull-right mt_10" defaultValue="Checkout" type="submit" />
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-search pull-right">
            <div className="search-overlay">
              {/* Close Icon */}
              <a href="javascript:void(0)" className="search-overlay-close" />
              {/* End Close Icon */}
              <div className="container">
                {/* Search Form */}
                <form role="search" id="searchform" action="http://html.lionode.com/search" method="get">
                  <label className="h5 normal search-input-label">Enter keywords To Search Entire Store</label>
                  <input defaultValue name="q" placeholder="Search here..." type="search" />
                  <button type="submit" />
                </form>
                {/* End Search Form */}
              </div>
            </div>
            <div className="header-search"> <a id="search-overlay-btn" /> </div>
          </div>
        </div>
        <div className="collapse navbar-collapse js-navbar-collapse pull-right">
          <ul id="menu" className="nav navbar-nav">
            <li> <NavLink to="/index-2">Home</NavLink></li>
            <li> <NavLink to="/category_page">Shop</NavLink></li>
            <li> <NavLink to="/blog_page">Blog</NavLink></li>
            <li className="dropdown mega-dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Collection </a>
              <ul className="dropdown-menu mega-dropdown-menu row">
                <li className="col-md-3">
                  <ul>
                    <li className="dropdown-header">Women's</li>
                    <li><a href="#">Unique Features</a></li>
                    <li><a href="#">Image Responsive</a></li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Newsletter Form</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Good Typography</a></li>
                  </ul>
                </li>
                <li className="col-md-3">
                  <ul>
                    <li className="dropdown-header">Man's</li>
                    <li><a href="#">Unique Features</a></li>
                    <li><a href="#">Image Responsive</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Newsletter Form</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Good Typography</a></li>
                  </ul>
                </li>
                <li className="col-md-3">
                  <ul>
                    <li className="dropdown-header">Children's</li>
                    <li><a href="#">Unique Features</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Image Responsive</a></li>
                    <li><a href="#">Auto Carousel</a></li>
                    <li><a href="#">Newsletter Form</a></li>
                    <li><a href="#">Four columns</a></li>
                    <li><a href="#">Good Typography</a></li>
                  </ul>
                </li>
                <li className="col-md-3">
                  <ul>
                    <li id="myCarousel" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="item active"> <a href="#"><img src="images/menu-banner1.jpg" className="img-responsive" alt="Banner1" /></a></div>
                        {/* End Item */}
                        <div className="item"> <a href="#"><img src="images/menu-banner2.jpg" className="img-responsive" alt="Banner1" /></a></div>
                        {/* End Item */}
                        <div className="item"> <a href="#"><img src="images/menu-banner3.jpg" className="img-responsive" alt="Banner1" /></a></div>
                        {/* End Item */}
                      </div>
                      {/* End Carousel Inner */}
                    </li>
                    {/* /.carousel */}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages </a>
              <ul className="dropdown-menu">
                <li> <NavLink to="/contact_us">Contact us</NavLink></li>
                <li> <NavLink to="/cart_page">Cart</NavLink></li>
                <li> <NavLink to="/checkout_page">Checkout</NavLink></li>
                <li> <NavLink to="/product_detail_page">Product Detail Page</NavLink></li>
                <li> <NavLink to="/single_blog">Single Post</NavLink></li>
              </ul>
            </li>
            <li> <NavLink to="/about">About us</NavLink></li>
          </ul>
        </div>
        {/* /.nav-collapse */}
      </nav>
    </div>
  </div>
  <div className="header-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-3">
          <div className="category">
            <div className="menu-bar" data-target="#category-menu,#category-menu-responsive" data-toggle="collapse" aria-expanded="true" role="button">
              <h4 className="category_text">Top category</h4>
              <span className="i-bar"><i className="fa fa-bars" /></span></div>
          </div>
          <div id="category-menu-responsive" className="navbar collapse " aria-expanded="true" style={{}} role="button">
            <div className="nav-responsive">
              <ul className="nav  main-navigation collapse in">
                <li><a href="#">Pharmacy</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Vitamins</a></li>
                <li><a href="#">Sweating</a></li>
                <li><a href="#">Coughs &amp; Colds</a></li>
                <li><a href="#">Hair Loss</a></li>
                <li><a href="#">Weight Loss</a></li>
                <li><a href="#">Antifungals</a></li>
                <li><a href="#">Pain Relief</a></li>
                <li><a href="#">Stop Smoking</a></li>
                <li><a href="#">Skin Conditions</a></li>
                <li><a href="#">Top Brands</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9">
          <div className="header-bottom-right offers">
            <div className="marquee"><span><i className="fa fa-circle" aria-hidden="true" />It's Sexual Health Week!</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Our 5 Tips for a Healthy Summer</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Sugar health at risk?</span>
              <span><i className="fa fa-circle" aria-hidden="true" />The Olay Ranges - What do they do?</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Body fat - what is it and why do we need it?</span>
              <span><i className="fa fa-circle" aria-hidden="true" />Can a pillow help you to lose weight?</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header
