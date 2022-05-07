import React from 'react'
import { NavLink } from 'react-router-dom'

function Item_product(props) {

  let img=[
    {img1: "images/product/product8.jpg", img2: "images/product/product8-1.jpg"},
    {img1: "images/product/product7.jpg", img2: "images/product/product7-1.jpg"},
    {img1: "images/product/product6.jpg", img2: "images/product/product6-1.jpg"}
  ]
  
    return (
      <>
      {
      img.map((img)=>{
        return(
        <>
      {
        <div className={"item"+props.id ? "product-layout product-list" : ""}>
                  <div className="product-thumb">
                    <div className="image product-imageblock"> <NavLink to="/product_detail_page"> <img data-name="product_image" src={img.img1} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={img.img2} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </NavLink> </div>
                    <div className="caption product-detail text-left">
                      <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">Latin literature from 45 BC, making it over old.</a></h6>
                      <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-1x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /><i className="fa fa-star fa-stack-x" /></span> </div>
                      <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                      </span>
                      <p className="product-desc mt_20"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                      <div className="timer mt_80">
                        <div className="days" />
                        <div className="hours" />
                        <div className="minutes" />
                        <div className="seconds" />
                      </div>
                      <div className="button-group text-center">
                        <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                        <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                        <div className="compare"><a href="#"><span>Compare</span></a></div>
                        <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                      </div>
                    </div>
                  </div>
          </div>
      }
      </>
        )
      })
      }
      </>
    )
 
}

export default Item_product
