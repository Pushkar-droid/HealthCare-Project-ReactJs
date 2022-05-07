import React from "react";

function Sub_Banner() {
  return (
    <div className="row">
      <div className="cms_banner mt_10">
        <div className="col-xs-6 col-sm-12 col-md-6 mt_20">
          <div id="subbanner1" className="sub-hover">
            <a href="#">
              <img
                src="images/sub1.jpg"
                alt="Sub Banner1"
                className="img-responsive"
              />
            </a>
            <div className="bannertext">
              <h2>Full HD Camera</h2>
              <p className="mt_10">Different Resolutions</p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-12 col-md-6 mt_20">
          <div id="subbanner2" className="sub-hover">
            <a href="#">
              <img
                src="images/sub2.jpg"
                alt="Sub Banner2"
                className="img-responsive"
              />
            </a>
            <div className="bannertext">
              <h2>smart watches</h2>
              <p className="mt_10">Most Popular Brands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub_Banner;
