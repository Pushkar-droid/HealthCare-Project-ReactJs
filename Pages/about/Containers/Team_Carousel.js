import React from "react";

function Team_Carousel() {
  let image = ["images/tm1.jpg", "images/tm2.jpg", "images/tm3.jpg", "images/tm4.jpg", "images/tm5.jpg"]
  return (
    <>
      {
        image.map((img)=>{
          return(
            <>
              <div className="item team-detail">
      <div className="team-item-img">
        <img src={img} />
      </div>
      <div className="team-designation mt_20">php Developer</div>
      <h4 className="team-title  mtb_10">joseph Lui </h4>
      <p>
        Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem
        ipsum dolor s..
      </p>
      <ul className="social mt_20 mb_80">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.dribbble.com/" target="_blank">
            <i className="fa fa-dribbble" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" target="_blank">
            <i className="fa fa-pinterest" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/" target="_blank">
            <i className="fa fa-behance" />
          </a>
        </li>
      </ul>
    </div>
            </>
          )
        })
      }
    </>
  );
}

export default Team_Carousel;
