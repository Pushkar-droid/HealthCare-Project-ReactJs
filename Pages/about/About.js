import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Side_menu from "../../Components/Side_menu";
import Accordion from "../checkout_page/Components/Accordion";
import Team_Carousel from "./Containers/Team_Carousel";
import Skills from "./Containers/Skills";


function About() {
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
            <div
              id="column-left"
              className="col-sm-4 col-md-4 col-lg-3 hidden-xs"
            >
              <Side_menu />
              <div className="left_banner left-sidebar-widget mt_30 mb_40">
                <a href="#">
                  <img
                    src="images/left1.jpg"
                    alt="Left Banner"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
              {/* about  */}
              <div className="row">
                <div className="col-md-12">
                  <figure>
                    <img src="images/about-page-gaando.jpg" alt="#" />
                  </figure>
                </div>
                <div className="col-md-12">
                  <div className="about-text">
                    <div className="about-heading-wrap">
                      <h2 className="about-heading mb_20 mt_40 ptb_10">
                        HealthCare Design is Best Part of <span>my Life </span>
                      </h2>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem of text. All the Lorem
                      Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a Ipsum is therefore always free
                      from repetition, injected humour, or non-characteristic
                      words etc.
                    </p>
                    <button type="button" className="btn mt_30">
                      HIRE ME
                    </button>
                  </div>
                </div>
              </div>
              {/* =====  product ===== */}
              <div className="row">
                <div className="col-md-6">
                  <div className="heading-part mb_20 mt_40">
                    <h2 className="main_title">What We Do?</h2>
                  </div>
                  <Accordion />
                </div>
                <Skills />
              </div>
              {/* =====  end  ===== */}
              {/*Team Carousel */}
              <div className="heading-part mb_10">
                <h2 className="main_title mt_50">Our Creative Team</h2>
              </div>
              <div className="team_grid box">
                <div className="team3col  owl-carousel">
                  <Team_Carousel />
                </div>
                {/*End Team Carousel */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Blog  */}
      {/* End Blog   */}
      {/* =====  CONTAINER END  ===== */}
      {/* =====  FOOTER START  ===== */}
      <Footer />
      <a id="scrollup">Scroll</a>
    </>
  );
}

export default About;
