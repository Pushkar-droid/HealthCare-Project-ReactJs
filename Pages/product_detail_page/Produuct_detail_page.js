import React from 'react'
import { NavLink } from 'react-router-dom'
import Brand_Logo from '../../Components/Brand_Logo'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Item_product from '../../Components/Item_product'
import Side_menu from '../../Components/Side_menu'
import Top_products from '../../Components/Top_products'
import Reviews from './Components/Reviews'

function Produuct_detail_page() {
  let image = [
    "images/product/product1.jpg",
    "images/product/product2.jpg",
    "images/product/product3.jpg",
    "images/product/product4.jpg",
    "images/product/product5.jpg",
    "images/product/product6.jpg",
    "images/product/product7.jpg"
  ]
  return (
    <div className="shop-detail">
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
            <h1>New LCDScreen...</h1>
            <ul>
              <li><NavLink to="/index-2">Home</NavLink></li>
              <li><NavLink to="/category_page">Products</NavLink></li>
              <li className="active">New LCDS...</li>
            </ul>
          </div>
          {/* =====  BREADCRUMB END===== */}
          <div className="row mt_10 ">
            <div className="col-md-6">
              <div><a className="thumbnails"> <img data-name="product_image" src="images/product/product1.jpg" /></a></div>
              <div id="product-thumbnail" className="owl-carousel">
                {
                  image.map((img)=>{
                    return(
                      <>
                        <div className="item">
                          <div className="image-additional"><a className="thumbnail" href={img} data-fancybox="group1"> <img src={img} /></a></div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-md-6 prodetail caption product-thumb">
              <h4 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h4>
              <div className="rating">
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span>
              </div>
              <span className="price mb_20"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
              </span>
              <hr />
              <ul className="list-unstyled product_info mtb_20">
                <li>
                  <label>Brand:</label>
                  <span> <a href="#">Apple</a></span></li>
                <li>
                  <label>Product Code:</label>
                  <span> product 20</span></li>
                <li>
                  <label>Availability:</label>
                  <span> In Stock</span></li>
              </ul>
              <hr />
              <p className="product-desc mtb_30"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..</p>
              <div id="product">
                <div className="form-group">
                  <div className="row">
                    <div className="Sort-by col-md-6">
                      <label>Sort by</label>
                      <select name="product_size" id="select-by-size" className="selectpicker form-control">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <div className="Color col-md-6">
                      <label>Color</label>
                      <select name="product_color" id="select-by-color" className="selectpicker form-control">
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Orange</option>
                        <option>White</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="qty mt_30 form-group2">
                  <label>Qty</label>
                  <input name="product_quantity" min={1} defaultValue={1} type="number" />
                </div>
                <div className="button-group mt_30">
                  <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                  <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                  <div className="compare"><a href="#"><span>Compare</span></a></div>
                </div>
              </div>
            </div>
          </div>
          <Reviews />
          <div className="row">
            <div className="col-md-12">
              <div className="heading-part text-center">
                <h2 className="main_title mt_50">Related Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-layout  product-grid related-pro  owl-carousel mb_50">
              <Item_product id={1}/>
              <Item_product id={1}/>
            </div>
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
    {/* =====  FOOTER END  ===== */}
  </div>
  <a id="scrollup">Scroll</a>
</div>

  )
}

export default Produuct_detail_page
