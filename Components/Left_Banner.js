import React from 'react'

function Left_Banner() {
  return (
      <>
    <div className="left_banner left-sidebar-widget mt_30 mb_50"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
          <div className="left-cms left-sidebar-widget mb_50">
            <ul>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Shipping" />
                  <h6>Free Shipping</h6>
                  <p>Free delivery worldwide</p>
                </div>
              </li>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Order" />
                  <h6>Order Online</h6>
                  <p>Hours : 8am - 11pm</p>
                </div>
              </li>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Save" />
                  <h6>Shop And Save</h6>
                  <p>For All Spices &amp; Herbs</p>
                </div>
              </li>
              <li>
                <div className="feature-i-left ptb_40">
                  <div className="icon-right Safe" />
                  <h6>Safe Shoping</h6>
                  <p>Ensure genuine 100%</p>
                </div>
              </li>
            </ul>
          </div>
          </>
  )
}

export default Left_Banner
