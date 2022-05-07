import React from "react";

function Testimonial() {
  let img = ["images/user1.jpg", "images/user2.jpg", "images/user3.jpg"];
  return (
    <div className="Testimonial left-sidebar-widget mb_50">
      <div className="heading-part mb_20 ">
        <h2 className="main_title">Testimonial</h2>
      </div>
      <div className="client owl-carousel text-center pt_10">
        {img.map((img) => {
          return (
            <>
              <div className="item client-detail">
                <div className="client-avatar">
                  <img src={img} />
                </div>
                <div className="client-title  mt_30">
                  <strong>joseph Lui</strong>
                </div>
                <div className="client-designation mb_10">php Developer</div>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem
                  ipsum dolor sit amet, sea in odio ..
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
